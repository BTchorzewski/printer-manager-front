import React from 'react';
import './ManagePrinterButton.scss';
import { useNavigate } from 'react-router-dom';
import { PrinterButton } from './PrinterButton';

interface Props {
  printerId: string,
  children: React.ReactNode,
}

export function ManagePrinterButton({ printerId, children }: Props) {
  const navigate = useNavigate();

  return (
    <PrinterButton
      action={() => {
        navigate(`/printer/manage/${printerId}`);
      }}
      printerId={printerId}
    >
      {children}
    </PrinterButton>
  );
}
