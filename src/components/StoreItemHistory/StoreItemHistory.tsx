import React, { useEffect, useState } from 'react';
import './StoreItemHistory.scss';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { StoreItem, Supply, SupplyRespond } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Container } from '../Container/Container';

export function StoreItemHistory() {
  const [storeItem, setStoreItem] = useState<StoreItem | null>(null);
  const { storeId } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    (async () => {
      const respond = await fetch(`http://localhost:3001/api/store/${storeId}`);
      const { msg, data } = await respond.json() as SupplyRespond;
      if (respond.status === 200) {
        const [fetchedStoreItem] = data as unknown as StoreItem[];
        setStoreItem(fetchedStoreItem);
      } else {
        alert(msg);
        navigation('/printers');
      }
    })();
  }, []);
  if (storeItem === null) return <Spinner />;
  return (
    <Container title="store item history" action={() => { navigation('/printers'); }}>
      <div className="StoreItemHistory">
        <p className="StoreItemHistory__text">{storeItem.name}</p>
        <p className="StoreItemHistory__text">{storeItem.model}</p>
        <p className="StoreItemHistory__text">{moment(storeItem.storedAt).format('DD-MM-YYYY HH:mm')}</p>
        <p className="StoreItemHistory__text">{moment(storeItem.installedAt).format('DD-MM-YYYY HH:mm')}</p>
      </div>
    </Container>
  );
}
