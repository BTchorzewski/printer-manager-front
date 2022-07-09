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
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
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
    const { msg } = await respond.json();

    if (respond.status === 200) {
      alert(msg);
      setQuantity(1);
      setUpdateStore(!updateStore);
    } else {
      alert(msg);
    }
  };

  return (
    <div key={supply.id} className="StoreItem">
      <div className="StoreItem__info">
        <p className="StoreItem__text">{supply.name}</p>
        <p className="StoreItem__text">
          Total:
          {supply.total}
        </p>
        <p className="StoreItem__text">
          Available:
          {supply.totalAvailable}
        </p>
      </div>
      <input
        onChange={handleInput}
        value={quantity}
        type="number"
        className="StoreItem__input"
        min={1}
        max={10}
        id="quantity"
      />
      <button onClick={handleButton} type="button" className="StoreItem__button">add</button>
    </div>
  );
}
