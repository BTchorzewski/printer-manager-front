import React, { useEffect, useState } from 'react';
import './NumberOfPrinters.scss';
import { Note } from '../../Note/Note';

export function NumberOfPrinters() {
  const [numberOfPrinters, setNumberOfPrinters] = useState(0);
  useEffect(() => {
    (async () => {
      const respond = await fetch('http://localhost:3001/api/reports/printers-number');
      const { data } = await respond.json();
      setNumberOfPrinters(data);
    })();
  }, []);
  return (
    <Note msg="A number of the printers" data={numberOfPrinters} />
  );
}
