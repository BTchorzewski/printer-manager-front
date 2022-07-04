import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './EditPrinterPage.scss'
import {useParams} from "react-router-dom";
import {Printer} from "types";
import {PrinterModel} from '../../utils/utils'

export const EditPrinterPage = () => {
  const {printerId} = useParams()
  const [printer, setPrinter] = useState<Printer | null>(null)
  const models = Object.values(PrinterModel);

  useEffect(() => {
    (async () => {
      const respond = await fetch(`http://localhost:3001/api/printers/${printerId}`);
      const [result] = (await respond.json()).data;
      console.log(result);
      setPrinter(result)
    })()
  }, [])

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setPrinter((prevPrinter) => {
      return ({
        ...prevPrinter,
        [e.target.name]: e.target.value
      });
    })
  }

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setPrinter(prevState => {
      return {
        ...prevState,
        isMultifunctional: e.target.value !== PrinterModel.Xerox_VersaLink_C400 ? true : false,
        model: e.target.value,
      }
    })
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, model, isMultifunctional, location, area, ip} = printer as Printer;
    const respond = await fetch(`http://localhost:3001/api/printers/${printerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        model,
        isMultifunctional,
        location,
        area,
        ip,
      }),
    })
  }

  //@todo add respond error handler,
  //@todo create component with respond error message
  //@todo add css styles.


  if (printer === null) return <p>waiting...</p>
  return (
    <form onSubmit={submitHandler}>
      <label>
        name:
        <input
          type='text'
          value={printer.name}
          name='name'
          onChange={inputHandler}
        />
      </label>
      <label>
        IP:
        <input
          type='text'
          value={printer.ip}
          name='ip'
          onChange={inputHandler}
        />
      </label>
      <label>
        Model:
        <select
          name='model'
          onChange={selectHandler}
        >
          {
            models.map(model => {
              return model === printer.model
                ? <option selected value={model}>{model}</option>
                : <option value={model}>{model}</option>;
            })
          }
        </select>
      </label>

      <div>
        <label>
          <input
            type='radio'
            value={1}
            checked={printer.isMultifunctional === true}
            name='isMultifunctional'
            disabled
          /> Yes
        </label>
        <label>
          <input
            type='radio'
            value={0}
            checked={printer.isMultifunctional === false}
            name='isMultifunctional'
            disabled
          /> No
        </label>
      </div>

      <label>
        Area:
        <input
          type='text'
          value={printer.area}
          name='area'
          onChange={inputHandler}
        />
      </label>
      <label>
        Locations:
        <input
          type='text'
          value={printer.location}
          name='location'
          onChange={inputHandler}
        />
      </label>
      <button type='submit'>Update</button>
    </form>
  )
}