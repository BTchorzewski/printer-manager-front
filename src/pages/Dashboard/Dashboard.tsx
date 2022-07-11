import React from 'react';
import { NumberOfPrinter } from '../../components/PrinterStats/NumberOfPrinter';

export function Dashboard() {
  return (
    <div className="Dashboard">
      <h1 className="Dashboard__title">Dashboard</h1>
      <NumberOfPrinter />
    </div>
  );
}
