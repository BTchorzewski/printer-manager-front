import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './ManagePrinter.scss';
import { FiX } from 'react-icons/fi';
import { InstallSupplies } from './InstallSupplies';
import { PrinterWithHistory, SupplyAvailability } from '../../types';
import { History } from './History';

interface Props {
  printer: PrinterWithHistory;
  supplies: SupplyAvailability[] | null;
}

export function ManagePrinter({ printer, supplies }: Props) {
  const [showHistory, setShowHistory] = useState(false);
  const [showSupplies, setShowSupplies] = useState(false);
  return (
    <>
      <div className="ManagePrinter">
        <h2 className="ManagePrinter__title">Summary</h2>
        <div className="ManagePrinter__info">
          <p className="ManagePrinter__info-item">
            name: {printer.name}
          </p>
          <p className="ManagePrinter__info-item">
            ip: {printer.ip}
          </p>
          <p className="ManagePrinter__info-item">
            area: {printer.area}
          </p>
          <p className="ManagePrinter__info-item">
            location: {printer.location}
          </p>
          <p className="ManagePrinter__info-item">
            model: {printer.model}
          </p>
        </div>
        <div className="ManagePrinter__actions">
          <button
            onClick={(event) => setShowHistory(!showHistory)}
            className=" ManagePrinter__button ManagePrinter__button--yellow"
          >
            History
          </button>
          <button
            onClick={(event) => setShowSupplies(!showSupplies)}
            className=" ManagePrinter__button ManagePrinter__button--green"
          >
            Install a supply
          </button>
        </div>
      </div>
      {
      showHistory && <History history={printer.supplies} show={setShowHistory} />
      }
      {
        // eslint-disable-next-line max-len
        showSupplies && <InstallSupplies printerId={printer.id} supplies={supplies} show={setShowSupplies} />
      }
    </>
  );
}
