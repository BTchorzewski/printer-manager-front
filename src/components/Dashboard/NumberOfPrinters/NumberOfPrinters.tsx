import React, { useEffect, useState } from 'react';
import './NumberOfPrinters.scss';

export function NumberOfPrinters() {
  const [numberOfPrinters, setNumberOfPrinters] = useState(0);
  useEffect(() => {
    (async () => {
      const respond = await fetch('http://localhost:3001/api/printers/stats/total');
      const { data } = await respond.json();
      setNumberOfPrinters(data);
    })();
  }, []);
  return (
    <div className="NumberOfPrinters">
      <span className="NumberOfPrinters__title">A number of active printers</span>
      <span className="NumberOfPrinters__number">{numberOfPrinters}</span>
    </div>
  );
}
