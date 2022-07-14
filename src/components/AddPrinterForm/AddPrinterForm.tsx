import React, {
  ChangeEvent, FormEvent, useContext, useState,
} from 'react';
import './AddPrinterForm.scss';
import { PrintersContext } from '../../context/printers-context';
import { AddPrinterRequest, PrinterModel } from '../../types/index';
import { Container } from '../Container/Container';

const models = Object.values(PrinterModel);
type Show = (cb: (prev: boolean) => any) => unknown;
interface Props {
  show: Show
}

export function AddPrinterForm({ show }: Props) {
  const [printer, setPrinter] = useState<AddPrinterRequest>({
    name: '',
    ip: '',
    model: PrinterModel.Unspecified,
    isMultifunctional: false,
    area: '',
    location: '',
  });
  const [isInvalid, setInvalid] = useState(true);
  const { setUpdatePrinters, updatePrinters } = useContext(PrintersContext);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setPrinter((prevPrinter) => ({
      ...prevPrinter,
      [e.target.name]: e.target.value,
    }));
  };

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setPrinter((prevState) => ({
      ...prevState,
      isMultifunctional: e.target.value !== PrinterModel.Xerox_VersaLink_C400,
      model: e.target.value,
    }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      name, model, isMultifunctional, location, area, ip,
    } = printer;

    const respond = await fetch('http://localhost:3001/api/printers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        model,
        isMultifunctional,
        location,
        area,
        ip,
      }),
    });
    const { msg } = await respond.json();
    if (respond.status === 200) {
      setUpdatePrinters(!updatePrinters);
      show((prev) => !prev);
      alert(msg);
    } else {
      alert(msg);
    }
  };

  function closeForm() {
    show((prev) => !prev);
  }

  return (
    <Container title="add printer" action={() => { show((prev) => !prev); }}>
      <form className="AddPrinterForm" onSubmit={submitHandler}>
        <label
          className="AddPrinterForm__label"
          htmlFor="name"
        >
          <span className="AddPrinterForm__name">name:</span>
          <input
            className="AddPrinterForm__input"
            onChange={inputHandler}
            type="text"
            id="name"
            name="name"
            minLength={3}
            maxLength={5}
          />
        </label>
        <label
          className="AddPrinterForm__label"
          htmlFor="ip"
        >
          <span className="AddPrinterForm__name">ip</span>
          <input
            className="AddPrinterForm__input"
            onChange={inputHandler}
            type="text"
            id="ip"
            name="ip"
          />
        </label>
        <label
          className="AddPrinterForm__label"
          htmlFor="area"
        >
          <span className="AddPrinterForm__name">area</span>
          <input
            className="AddPrinterForm__input"
            onChange={inputHandler}
            type="text"
            id="area"
            name="area"
            minLength={3}
            maxLength={150}
          />
        </label>
        <label
          className="AddPrinterForm__label"
          htmlFor="location"
        >
          <span className="AddPrinterForm__name">location</span>
          <input
            className="AddPrinterForm__input"
            onChange={inputHandler}
            type="text"
            id="location"
            name="location"
            minLength={3}
            maxLength={500}
          />
        </label>
        <label
          className="AddPrinterForm__label"
          htmlFor="model"
        >
          <span className="AddPrinterForm__name">model</span>
          <select
            className="AddPrinterForm__select"
            id="model"
            name="model"
            onChange={selectHandler}
          >
            {
                models.map((model) => (model === printer.model
                  ? <option selected value={model}>{model}</option>
                  : <option value={model}>{model}</option>))
              }
          </select>
        </label>
        <button
          className="AddPrinterForm__button"
          type="submit"
          disabled={isInvalid}
        >
          Add printer
        </button>
      </form>
    </Container>
  );
}
