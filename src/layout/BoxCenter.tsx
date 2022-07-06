import React from 'react';
import './BoxCenter.scss';

interface Props {
  children: React.ReactNode;
}

export function BoxCenter({ children }: Props) {
  return (
    <div className="BoxCenter">
      {children}
    </div>
  );
}
