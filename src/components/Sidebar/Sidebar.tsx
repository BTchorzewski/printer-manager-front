import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="Sidebar">
      <header className="Sidebar__header">
        <h2 className="Sidebar__title">Printer manager</h2>
      </header>
      <nav className="Sidebar__navigation">
        <ul className="Sidebar__list">
          <li className="Sidebar__item"><Link className="Sidebar__link" to="/">Dashboard</Link></li>
          <li className="Sidebar__item"><Link className="Sidebar__link" to="/printers">Printers</Link></li>
          <li className="Sidebar__item"><Link className="Sidebar__link" to="/store">Store</Link></li>
          <li className="Sidebar__item"><Link className="Sidebar__link" to="/supplies">Supplies</Link></li>
        </ul>
      </nav>
    </div>
  );
}
