import React from 'react';
import './Dasboard.scss';
import { NumberOfPrinters } from '../../components/Dashboard/NumberOfPrinters/NumberOfPrinters';

export function Dashboard() {
  return (
    <div className="Dashboard">
      <h1 className="Dashboard__title">Dashboard</h1>
      <NumberOfPrinters />
    </div>
  );
}
