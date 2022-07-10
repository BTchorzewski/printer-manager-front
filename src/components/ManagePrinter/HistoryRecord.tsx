import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

interface Props {
  storeId:string;
  name:string;
  installationDate: Date;
}
export function HistoryRecord({ installationDate, storeId, name }: Props) {
  return (
    <div key={storeId} className="History__element">
      <p>{name} installed at <span>{moment(installationDate).format('DD-MM-YYYY HH:mm')}</span></p>
      {/*@todo create add page with information*/}
      <Link to={`/store/manage/${storeId}`}>More info</Link>
    </div>
  );
}
