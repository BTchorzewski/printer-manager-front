import React, { ChangeEvent, useContext, useState } from 'react';
import './StoreItem.scss';
import { SupplyAvailability } from '../../../types';
import { StoreContext } from '../../../context/store-context';

interface Props {
  supply: SupplyAvailability
}

export function StoreItem({ supply }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { updateStore, setUpdateStore } = useContext(StoreContext);
  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleButton = async () => {
    const respond = await fetch(`http://localhost:3001/api/store/${supply.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
      }),
    });
    console.log(respond.status);
    if (respond.status === 200) setUpdateStore(!updateStore);
  };

  return (
    <div key={supply.id} className="Supply__content">
      <div className="Supply__info">
        <p className="Supply__text">{supply.name}</p>
        <p className="Supply__text">Total: {supply.total}</p>
        <p className="Supply__text">Avaialable: {supply.totalAvailable}</p>
      </div>
      <label htmlFor="quantity">
        order:
        <input
          onChange={handleInput}
          value={quantity}
          type="number"
          className="Supply__input"
          min={1}
          max={10}
          id="quantity"
        />
      </label>
      <button onClick={handleButton} type="button" className="StoreItem__button">add</button>
    </div>
  );
}
