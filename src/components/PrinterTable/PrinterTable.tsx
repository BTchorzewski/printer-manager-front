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
    <div className="PrinterTable">
      <h2 className="PrinterTable__title">Printers</h2>
      <table className="PrinterTable__table">
        <thead className="PrinterTable__head">
          <th className="PrinterTable__head-item">Name</th>
          <th className="PrinterTable__head-item">IP</th>
          <th className="PrinterTable__head-item">Model</th>
          <th className="PrinterTable__head-item">isMultifunctional</th>
          <th className="PrinterTable__head-item">Area</th>
          <th className="PrinterTable__head-item">Location</th>
          <th className="PrinterTable__head-item">Actions</th>
        </thead>
        <tbody className="PrinterTable__body">
          {
        printers.map((printer) => (
          <tr
            className="PrinterTable__row"
            key={printer.id}
          >
            <td className="PrinterTable__data">{printer.name}</td>
            <td className="PrinterTable__data">{printer.ip}</td>
            <td className="PrinterTable__data">{printer.model}</td>
            <td className="PrinterTable__data">{isMultifunctionYesNoLabel(printer.isMultifunctional)}</td>
            <td className="PrinterTable__data">{printer.area}</td>
            <td className="PrinterTable__data">{printer.location}</td>
            <td className="PrinterTable__actions">
              <EditPrinterButton printerId={printer.id}>Edit</EditPrinterButton>
              <ManagePrinterButton printerId={printer.id}>Manage</ManagePrinterButton>
              <DeletePrinterButton printerId={printer.id}>Delete</DeletePrinterButton>
            </td>

          </tr>
        ))
      }
        </tbody>
      </table>
    </div>
  );
}
