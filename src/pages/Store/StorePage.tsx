import React, { useContext, useEffect, useState } from 'react';
import './StorePage.scss';
import { ListSuppliesWithAvailability, Supply, SupplyAvailability } from '../../types';
import { Spinner } from '../../components/Spinner/Spinner';
import { StoreItem } from '../../components/Store/StoreItem/StoreItem';
import { StoreContext } from '../../context/store-context';

export function StorePage() {
  const { updateStore } = useContext(StoreContext);
  const [supplies, setSupplies] = useState<ListSuppliesWithAvailability | null>(null);
  useEffect(() => {
    (async () => {
      const respond = await fetch('http://localhost:3001/api/supplies');
      if (respond.status !== 200) alert('error, can not');
      const { data } = await respond.json();
      setSupplies(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const respond = await fetch('http://localhost:3001/api/supplies');
      if (respond.status !== 200) alert('error, can not');
      const { data } = await respond.json();
      setSupplies(data);
    })();
  }, [updateStore]);

  return (
    <div
      className="StorePage"
    >
      <h2 className="StorePage__title">Store</h2>
      <div className="StorePage__content">
        {
          supplies === null
            ? <Spinner />
            : supplies.map((suppliesWithAvailability, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="Supply" key={index}>
                <h3 className="Supply__title">{suppliesWithAvailability.model}</h3>
                {
                      // eslint-disable-next-line max-len
                      suppliesWithAvailability.supplies.map((supply) => (
                        <StoreItem supply={supply} />
                      ))
                    }

              </div>
            ))
        }
      </div>
    </div>
  );
}
