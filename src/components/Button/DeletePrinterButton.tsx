import React, { useContext } from 'react';
import './DeletePrinterButton.scss';
import { useNavigate } from 'react-router-dom';
import { PrinterButton } from './PrinterButton';
import { PrintersContext } from '../../context/printers-context';

interface Props {
  printerId: string,
  children: React.ReactNode,
}

// navigate(`/printer/manage/${printerId}`);
export function DeletePrinterButton({ printerId, children }: Props) {
  const navigate = useNavigate();
  const { setUpdatePrinters, updatePrinters } = useContext(PrintersContext);
  const deletePrinter = async (printerId: string) => {
    const respond = await fetch(`http://localhost:3001/api/printers/${printerId}`, {
      method: 'DELETE',
    });
    // eslint-disable-next-line no-unused-expressions
    if (respond.status === 200) setUpdatePrinters(!updatePrinters);
  };

  return (
    <PrinterButton
      action={async () => {
        await deletePrinter(printerId);
      }}
      printerId={printerId}
    >
      {children}
    </PrinterButton>
  );
}
