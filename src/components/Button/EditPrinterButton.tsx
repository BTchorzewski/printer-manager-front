import React from 'react';
import './EditPrinterButton.scss';
import { useNavigate } from 'react-router-dom';
import { PrinterButton } from './PrinterButton';

interface Props {
  printerId: string,
  children: React.ReactNode,
}

export function EditPrinterButton({ printerId, children }: Props) {
  const navigate = useNavigate();

  return (
    <PrinterButton
      action={() => {
        navigate(`/printer/edit/${printerId}`);
      }}
      printerId={printerId}
    >
      {children}
    </PrinterButton>
  );
}
