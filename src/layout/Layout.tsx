import React from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './Layout.scss';

interface Props {
  children: React.ReactNode,
}

export function Layout({ children }: Props) {
  return (
    <div className="Layout">
      <Sidebar />
      {
        children
      }
    </div>
  );
}
