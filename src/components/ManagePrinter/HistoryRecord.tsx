import { Link } from 'react-router-dom';
import './HistoryRecord.scss';
import React from 'react';
import moment from 'moment';

interface Props {
  storeId:string;
  name:string;
  installationDate: Date;
}
export function HistoryRecord({ installationDate, storeId, name }: Props) {
  return (
    <div key={storeId} className="HistoryRecord">
      <p className="HistoryRecord__text">
        {name}
        {' '}
        installed at
        {' '}
        <span className="HistoryRecord__data">{moment(installationDate).format('DD-MM-YYYY HH:mm')}</span>
      </p>
      <Link className="HistoryRecord__link" to={`/store-item/${storeId}`}>More info</Link>
    </div>
  );
}
