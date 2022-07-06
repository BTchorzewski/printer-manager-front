import React from 'react';
import './PrinterTable.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Printer } from '../../types';
import { isMultifunctionYesNoLabel } from '../../utils/utils';
import { EditPrinterButton } from '../Button/EditPrinterButton';
import { ManagePrinterButton } from '../Button/ManagePrinterButton';
import { DeletePrinterButton } from '../Button/DeletePrinterButton';

interface Props {
  printers: Printer[];
}

export function PrinterTable({ printers }: Props) {
  return (
    <table className="Table">
      <thead className="Table__head">
        <th className="Table__head-item">Name</th>
        <th className="Table__head-item">IP</th>
        <th className="Table__head-item">Model</th>
        <th className="Table__head-item">isMultifunctional</th>
        <th className="Table__head-item">Area</th>
        <th className="Table__head-item">Location</th>
        <th className="Table__head-item">Actions</th>
      </thead>
      <tbody className="Table__body">
        {
        printers.map((printer) => (
          <tr
            className="Table__row"
            key={printer.id}
          >
            <td className="Table__data">{printer.name}</td>
            <td className="Table__data">{printer.ip}</td>
            <td className="Table__data">{printer.model}</td>
            <td className="Table__data">{isMultifunctionYesNoLabel(printer.isMultifunctional)}</td>
            <td className="Table__data">{printer.area}</td>
            <td className="Table__data">{printer.location}</td>
            <td className="Table__actions">
              <EditPrinterButton printerId={printer.id}>Edit</EditPrinterButton>
              <ManagePrinterButton printerId={printer.id}>Manage</ManagePrinterButton>
              <DeletePrinterButton printerId={printer.id}>Delete</DeletePrinterButton>
            </td>

          </tr>
        ))
      }
      </tbody>
    </table>
  );
}
