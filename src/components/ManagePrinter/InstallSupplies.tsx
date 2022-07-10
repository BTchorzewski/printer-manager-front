import React, { useContext } from 'react';
import './InstallSupplies.scss';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { PrinterContext } from '../../context/printer-context';
import { InstallButton } from '../Button/InstallButton';
import { SupplyAvailability } from '../../types/index';

type Show = (prev: (el:boolean)=>boolean) => void
interface Props {
  supplies: SupplyAvailability[] | null
  printerId: string;
  show: Show;
}

export function InstallSupplies({ show, supplies, printerId }: Props) {
  const { setUpdatePrinter, updatePrinter } = useContext(PrinterContext);
  if (supplies === null) return <Spinner />;
  console.log(printerId);
  return (
    <div className="InstallSupplies">
      <FiX
        className="InstallSupplies__icon"
        onClick={() => { show(((prev) => !prev)); }}
      />
      <h3 className="InstallSupplies__title">InstallSupplies</h3>
      {
        supplies.length > 0
          ? supplies.map((supply) => (
            <div key={supply.id} className="InstallSupplies__element">
              <div className="InstallSupplies__info">
                <p className="InstallSupplies__name">{supply.name}</p>
                <p className="InstallSupplies__number">
                  Available items:
                  {supply.totalAvailable}
                </p>
              </div>
              {
                !supply.totalAvailable
                  ? <InstallButton isAvailable={false} />
                  : <InstallButton isAvailable printerId={printerId} supplyId={supply.id} />
              }
            </div>
          ))
          : <p>empty</p>
      }
    </div>
  );
}
