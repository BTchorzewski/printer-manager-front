import React from 'react';
import './InstallSupplies.scss';
import { FiX } from 'react-icons/fi';
import { SupplyAvailability } from '../../types/index';
import { Spinner } from '../Spinner/Spinner';

type Show = (prev: (el:boolean)=>boolean) => void
interface Props {
  supplies: SupplyAvailability[] | null
  show: Show;
}

export function InstallSupplies({ show, supplies }: Props) {
  if (supplies === null) return <Spinner />;

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
            <div className="InstallSupplies__element">
              <div className="InstallSupplies__info">
                <p className="InstallSupplies__name">{supply.name}</p>
                <p className="InstallSupplies__number">Available items: {supply.totalAvailable} </p>
              </div>
              {
                !supply.totalAvailable
                  ? <button className=" InstallSupplies__button" disabled>install</button>
                  : <button className=" InstallSupplies__button InstallSupplies__button--active">install</button>
              }
            </div>
          ))
          : <p>empty</p>
      }
    </div>
  );
}
