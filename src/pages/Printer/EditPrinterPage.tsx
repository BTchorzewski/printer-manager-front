import React, {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import './EditPrinterPage.scss';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Printer } from 'types';
import { PrinterModel } from '../../utils/utils';

export function EditPrinterPage() {
  const { printerId } = useParams();
  const [printer, setPrinter] = useState<Printer | null>(null);
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
  };

  // @todo add respond error handler,
  // @todo create component with respond error message
  // @todo add css styles.

  if (printer === null) return <p>waiting...</p>;
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">
        name:
        <input
          id="name"
          type="text"
          value={printer.name}
          name="name"
          onChange={inputHandler}
        />
      </label>
      <label htmlFor="ip">
        IP:
        <input
          id="ip"
          type="text"
          value={printer.ip}
          name="ip"
          onChange={inputHandler}
        />
      </label>
      <label htmlFor="model">
        Model:
        <select
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

      <div>
        <label htmlFor="yesRadio">
          <input
            id="yesRadio"
            type="radio"
            value={1}
            checked={printer.isMultifunctional === true}
            name="isMultifunctional"
            disabled
          />
          Yes
        </label>
        <label htmlFor="noRadio">
          <input
            id="noRadio"
            type="radio"
            value={0}
            checked={printer.isMultifunctional === false}
            name="isMultifunctional"
            disabled
          />
          No
        </label>
      </div>

      <label htmlFor="area">
        Area:
        <input
          id="area"
          type="text"
          value={printer.area}
          name="area"
          onChange={inputHandler}
        />
      </label>
      <label htmlFor="location">
        Locations:
        <input
          id="location"
          type="text"
          value={printer.location}
          name="location"
          onChange={inputHandler}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}
