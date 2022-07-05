import React, { useEffect, useState } from 'react';
import './PrintersPage.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Printer } from 'types';
import { PrinterTable } from '../../components/PrinterTable/PrinterTable';

export function PrintersPage() {
  const [printers, setPrinters] = useState<null | Printer[]>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/api/printers', {
        method: 'GET',
      });
      const parsedList = await res.json();
      setPrinters(parsedList.data);
    })();
  }, []);

  if (printers === null) return <h1>loading...</h1>;
  return (
    <>
      <h1>Printers Page</h1>
      <PrinterTable printers={printers} />
    </>
  );
}
