import React from 'react';
import './Container.scss';
import { FiX } from 'react-icons/fi';

type Action = () => void;

interface Props {
  title: string;
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  action?: Action | null;
}

export function Container({ title, children, action }: Props) {
  return (
    <div className="Container">
      <h2 className="Container__title">{title}</h2>
      <FiX
        className="Container__icon"
        onClick={(event) => {
          // eslint-disable-next-line no-unused-expressions
          if (action) {
            action();
          }
        }}
      />
      {children}
    </div>
  );
}
