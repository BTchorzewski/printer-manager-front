import React from 'react';
import './PrinterButton.scss';

interface Props {
  printerId: string;
  children: React.ReactNode;
  action: () => void
}

export function PrinterButton({ printerId, children, action }: Props) {
  return (
    <button
      onClick={action}
      className="PrinterButton"
      type="button"
    >
      { children }
    </button>
  );
}
