import React from "react";
import './PrinterTable.scss'
import {Printer} from "types";
import {isMultifunctionYesNoLabel} from "../../utils/utils";

interface Props {
  printers: Printer[];
}

export const PrinterTable = ({printers}: Props) => {
  return (
    <table className='Table'>
      <tr className='Table__row'>
        <th className='Table__head'>Name</th>
        <th className='Table__head'>IP</th>
        <th className='Table__head'>Model</th>
        <th className='Table__head'>isMultifunctional</th>
        <th className='Table__head'>Area</th>
        <th className='Table__head'>Location</th>
        <th className='Table__head'>Actions</th>
      </tr>
      {
        printers.map(printer => {
          return <tr
            className='Table__row'
            key={printer.id}>
            <td className='Table__data'>{printer.name}</td>
            <td className='Table__data'>{printer.ip}</td>
            <td className='Table__data'>{printer.model}</td>
            <td className='Table__data'>{isMultifunctionYesNoLabel(printer.isMultifunctional)}</td>
            <td className='Table__data'>{printer.area}</td>
            <td className='Table__data'>{printer.location}</td>
            <td className='Table__actions'>
              <button className=' Button Button--edit'>Edit</button>
              <button className=' Button Button--manage'>Manage</button>
              <button className=' Button Button--delete'>Delete</button>
            </td>

          </tr>
        })
      }
    </table>
  );
}