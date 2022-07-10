import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './InstallButton.scss';
import { PrintersContext } from '../../context/printers-context';
import { PrinterContext } from '../../context/printer-context';

interface Props {
  isAvailable: boolean;
  // eslint-disable-next-line react/require-default-props
  printerId?: string;
  // eslint-disable-next-line react/require-default-props
  supplyId?: string;
}

export function InstallButton({ printerId, supplyId, isAvailable }: Props) {
  const { setUpdatePrinter, updatePrinter } = useContext(PrinterContext);
  const installSupply = async () => {
    const respond = await fetch(`http://localhost:3001/api/printers/${printerId}/supply/${supplyId}`, {
      method: 'POST',
    });
    const { msg } = await respond.json();
    if (respond.status === 200) setUpdatePrinter(!updatePrinter);
    //  @todo add error handling
    alert(msg);
  };
  if (!isAvailable) return <Link className="InstallSupplies__order" to="/store">Order new Items.</Link>;
  return (
    <button className="InstallButton" type="button" onClick={installSupply}>Install</button>
  );
}
