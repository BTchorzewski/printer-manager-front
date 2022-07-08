import React, { useContext, useEffect, useState } from 'react';
import './PrintersPage.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Printer } from 'src/types';
import { PrinterTable } from '../../components/PrinterTable/PrinterTable';
import { PrintersContext } from '../../context/printers-context';
import { BoxCenter } from '../../layout/BoxCenter';
import { AddPrinter } from '../../components/Button/AddPrinter/AddPrinter';
import { AddPrinterForm } from '../../components/AddPrinterForm/AddPrinterForm';

export function PrintersPage() {
  const [printers, setPrinters] = useState<null | Printer[]>(null);
  const { updatePrinters } = useContext(PrintersContext);
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/api/printers', {
        method: 'GET',
      });
      const parsedList = await res.json();
      console.log(parsedList.data);
      setPrinters(parsedList.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/api/printers', {
        method: 'GET',
      });
      const parsedList = await res.json();
      setPrinters(parsedList.data);
    })();
  }, [updatePrinters]);

  if (printers === null) return <h1>loading...</h1>;

  return (
    <>
      {/* <PrinterTable printers={printers} /> */}
      {
        showAddForm
          ? <AddPrinterForm show={setShowAddForm} />
          : <PrinterTable printers={printers} />
      }
      <AddPrinter show={setShowAddForm} />
    </>
  );
}
