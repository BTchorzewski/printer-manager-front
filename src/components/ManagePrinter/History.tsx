import React from 'react';
import './History.scss';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BasicStoreItem } from '../../types/index';

type Show = (prev: (el:boolean)=>boolean) => void
interface Props {
  history: BasicStoreItem[];
  show: Show;
}

export function History({ history, show }: Props) {
  return (
    <div className="History">
      <FiX
        className="History__icon"
        onClick={() => { show(((prev) => !prev)); }}
      />
      <h3 className="History__title">History</h3>
      {
        history.length > 0
          ? history.map((supply) => (
            <div className="History__element">
              <p key={supply.storeId}>{supply.name}</p>
              <Link to={`/store/manage/${supply.storeId}`}>More info</Link>
            </div>
          ))
          : <p>empty</p>
      }
    </div>
  );
}
