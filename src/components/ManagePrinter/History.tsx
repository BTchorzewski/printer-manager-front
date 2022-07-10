import React from 'react';
import './History.scss';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BasicStoreItem } from '../../types/index';
import { HistoryRecord } from './HistoryRecord';

type Show = (prev: (el:boolean)=>boolean) => void
interface Props {
  history: BasicStoreItem[];
  show: Show;
  // eslint-disable-next-line no-undef,react/no-unused-prop-types,react/require-default-props
  children?: React.ReactNode;
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
            // eslint-disable-next-line max-len
            <HistoryRecord
              storeId={supply.storeId}
              name={supply.name}
              installationDate={supply.installedAt}
            />
          ))
          : <p>no history</p>
      }
    </div>
  );
}
