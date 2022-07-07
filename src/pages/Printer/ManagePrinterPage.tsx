import React, { useEffect, useState } from 'react';
import './ManagePrinterPage.scss';
import { useParams } from 'react-router-dom';
import { PrinterWithHistory, SupplyAvailability } from '../../types/index';
import { ManagePrinter } from '../../components/ManagePrinter/ManagePrinter';

export function ManagePrinterPage() {
  const { printerId } = useParams();
  const [printer, setPrinter] = useState<PrinterWithHistory | null>(null);
  const [supplies, setSupplies] = useState< SupplyAvailability[] | null>(null);

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

  if (printer === null) return <p>loading</p>;

  return (
    <div className="ManagePrinterPage">

      <ManagePrinter
        printer={printer}
        supplies={supplies}
      />

    </div>
  );
}
