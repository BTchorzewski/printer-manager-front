import React, { useContext, useEffect, useState } from 'react';
import './ManagePrinterPage.scss';
import { useParams } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { PrinterWithHistory, SupplyAvailability } from '../../types/index';
import { ManagePrinter } from '../../components/ManagePrinter/ManagePrinter';
import { Spinner } from '../../components/Spinner/Spinner';
import { PrinterContext } from '../../context/printer-context';

export function ManagePrinterPage() {
  const { printerId } = useParams();
  const [printer, setPrinter] = useState<PrinterWithHistory | null>(null);
  const [supplies, setSupplies] = useState< SupplyAvailability[] | null>(null);
  const { updatePrinter } = useContext(PrinterContext);
  useEffect(() => {
    (async () => {
      const respond = await fetch(`http://localhost:3001/api/printers/${printerId}/history`);
      const { data } = await respond.json();
      const [fetchedPrinter] = data as PrinterWithHistory[];

      if (respond.status === 200) {
        const modelParam = encodeURIComponent(fetchedPrinter.model);
        const res = await fetch(`http://localhost:3001/api/supplies/available/${modelParam}`);
        const { data } = await res.json();
        setPrinter(fetchedPrinter);
        setSupplies(data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const respond = await fetch(`http://localhost:3001/api/printers/${printerId}/history`);
      const { data } = await respond.json();
      const [fetchedPrinter] = data as PrinterWithHistory[];

      if (respond.status === 200) {
        const modelParam = encodeURIComponent(fetchedPrinter.model);
        const res = await fetch(`http://localhost:3001/api/supplies/available/${modelParam}`);
        const { data } = await res.json();
        setPrinter(fetchedPrinter);
        setSupplies(data);
      }
    })();
  }, [updatePrinter]);

  if (printer === null) return <Spinner />;

  return (
    <div className="ManagePrinterPage">
      <ManagePrinter
        printer={printer}
        supplies={supplies}
      />
    </div>
  );
}
