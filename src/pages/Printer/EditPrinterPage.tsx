import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import './EditPrinterPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Printer } from 'src/types';
import { FiX } from 'react-icons/fi';
import { PrinterModel } from '../../utils/utils';

export function EditPrinterPage() {
  const { printerId } = useParams();
  const [printer, setPrinter] = useState<Printer | null>(null);
  const navigation = useNavigate();
  const models = Object.values(PrinterModel);

  useEffect(() => {
    (async () => {
      const respond = await fetch(`http://localhost:3001/api/printers/${printerId}`);
      const [result] = (await respond.json()).data;
      setPrinter(result);
    })();
  }, []);

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
    } = printer as Printer;
    const respond = await fetch(`http://localhost:3001/api/printers/${printerId}`, {
      method: 'PUT',
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
      alert(msg);
    } else {
      alert(msg);
    }
  };

  // @todo add respond error handler,
  // @todo create component with respond error message
  // @todo add css styles.

  if (printer === null) return <p>waiting...</p>;
  return (
    <form
      className="EditPrinterForm"
      onSubmit={submitHandler}
    >
      <FiX
        className="EditPrinterForm__icon"
        onClick={(event) => {
          navigation('/printers');
        }}
      />
      <label
        className="EditPrinterForm__label"
        htmlFor="name"
      >
        <span
          className="EditPrinterForm__title"
        >
          name:
        </span>
        <input
          className="EditPrinterForm__input"
          id="name"
          type="text"
          value={printer.name}
          name="name"
          onChange={inputHandler}
        />
      </label>
      <label
        className="EditPrinterForm__label"
        htmlFor="ip"
      >
        <span
          className="EditPrinterForm__title"
        >
          ip:
        </span>
        <input
          className="EditPrinterForm__input"
          id="ip"
          type="text"
          value={printer.ip}
          name="ip"
          onChange={inputHandler}
        />
      </label>
      <label
        className="EditPrinterForm__label"
        htmlFor="area"
      >
        <span
          className="EditPrinterForm__title"
        >
          area:
        </span>
        <input
          className="EditPrinterForm__input"
          id="area"
          type="text"
          value={printer.area}
          name="area"
          onChange={inputHandler}
        />
      </label>
      <label
        className="EditPrinterForm__label"
        htmlFor="location"
      >
        <span
          className="EditPrinterForm__title"
        >
          location:
        </span>
        <input
          className="EditPrinterForm__input"
          id="location"
          type="text"
          value={printer.location}
          name="location"
          onChange={inputHandler}
        />
      </label>
      <label
        className="EditPrinterForm__label"
        htmlFor="model"
      >
        <span
          className="EditPrinterForm__title"
        >
          model:
        </span>
        <select
          className="EditPrinterForm__select"
          id="model"
          name="model"
          onChange={selectHandler}
        >
          {
            models.map((model) => (model === printer?.model
              ? <option selected value={model}>{model}</option>
              : <option value={model}>{model}</option>))
          }
        </select>
      </label>

      <button
        className="EditPrinterForm__button"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}
