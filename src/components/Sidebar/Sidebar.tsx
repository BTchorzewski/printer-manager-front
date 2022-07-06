import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import {
  FiBox, FiHome, FiPrinter, FiTruck,
} from 'react-icons/fi';

export function Sidebar() {
  return (
    <div className="Sidebar">
      <header className="Sidebar__header">
        <h2 className="Sidebar__title">Printer manager</h2>
      </header>
      <nav className="Sidebar__navigation">
        <ul className="Sidebar__list">
          <li className="Sidebar__item">
            <Link className="Sidebar__link" to="/">
              <FiHome
                className="Sidebar__icon"
              />
              Dashboard
            </Link>
          </li>
          <li className="Sidebar__item">
            <Link className="Sidebar__link" to="/printers">
              <FiPrinter
                className="Sidebar__icon"
              />
              Printers
            </Link>
          </li>
          <li className="Sidebar__item">
            <Link className="Sidebar__link" to="/store">
              <FiTruck
                className="Sidebar__icon"
              />
              Store
            </Link>
          </li>
          <li className="Sidebar__item">
            <Link className="Sidebar__link" to="/supplies">
              <FiBox
                className="Sidebar__icon"
              />
              Supplies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
