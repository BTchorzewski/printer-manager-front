import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Layout } from './layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrintersPage } from './pages/Printers/PrintersPage';
import { EditPrinterPage } from './pages/Printer/EditPrinterPage';
import { StorePage } from './pages/Store/StorePage';
import { SuppliesPage } from './pages/Supplies/SuppliesPage';
import { NotFoundPage } from './pages/error/NotFoundPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* eslint-disable-next-line react/no-children-prop */}
        <Route path="/" element={<Layout children={<Dashboard />} />} />
        {/* @todo add pagination to printers page */}
        <Route path="printers" element={<Layout><PrintersPage /></Layout>} />
        <Route path="printer">
          <Route path="edit/:printerId" element={<Layout><EditPrinterPage /></Layout>} />
          <Route path="manage/:printerId" element={<Layout><EditPrinterPage /></Layout>} />
        </Route>
        <Route path="store">
          <Route path="manage/:storeId" element={<Layout><StorePage /></Layout>} />
        </Route>
        <Route path="supplies">
          <Route path="manage/:supplyId" element={<Layout><SuppliesPage /></Layout>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
