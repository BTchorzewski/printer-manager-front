import React from 'react';
import './AddPrinter.scss';
import { useNavigate } from 'react-router-dom';
import { FiCrosshair } from 'react-icons/fi';

type Show = (cb: any) => unknown;
interface Props {
  show: Show
}

export function AddPrinter(props: Props) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className="AddPrinter"
      onClick={() => {
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        props.show((prev:boolean) => !prev);
      }}
    >
      <FiCrosshair className="AddPrinter__icon" />
      <div className="AddPrinter__msg">
        Add printer
      </div>
    </div>
  );
}
