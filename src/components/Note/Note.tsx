import React from 'react';
import './Note.scss';

interface Props {
  msg: string;
  // eslint-disable-next-line react/require-default-props
  data?: number;
}

export function Note({ msg, data }: Props) {
  return (
    <div className="Note">
      <span className="Note__title">{msg}</span>
      <span className="Note__number">{data}</span>
    </div>
  );
}
