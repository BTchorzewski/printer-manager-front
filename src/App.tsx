import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrintersPage } from './pages/Printers/PrintersPage';
import { ManagePrinterPage } from './pages/Printer/ManagePrinterPage';
import { EditPrinterPage } from './pages/Printer/EditPrinterPage';
import { AddPrinterPage } from './pages/Printer/AddPrinterPage';
import { StorePage } from './pages/Store/StorePage';
import { SuppliesPage } from './pages/Supplies/SuppliesPage';
import { NotFoundPage } from './pages/error/NotFoundPage';
import { PrintersContext } from './context/printers-context';

function App() {
  const [updatePrinters, setUpdatePrinters] = useState(false);

  return (
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <PrintersContext.Provider value={{ updatePrinters, setUpdatePrinters }}>
        <BrowserRouter>
          <Routes>
            {/* eslint-disable-next-line react/no-children-prop */}
            <Route path="/" element={<Layout children={<Dashboard />} />} />
            {/* @todo add pagination to printers page */}
            <Route path="printers" element={<Layout><PrintersPage /></Layout>} />
            <Route path="printer">
              <Route path="manage/:printerId" element={<Layout><ManagePrinterPage /></Layout>} />
              <Route path="edit/:printerId" element={<Layout><EditPrinterPage /></Layout>} />
              <Route path="add" element={<Layout><AddPrinterPage /></Layout>} />
            </Route>
            <Route path="store" element={<Layout><StorePage /></Layout>}>
              <Route path="manage/:storeId" element={<Layout><StorePage /></Layout>} />
            </Route>
            <Route path="supplies" element={<Layout><SuppliesPage /></Layout>}>
              <Route path="manage/:supplyId" element={<Layout><SuppliesPage /></Layout>} />
            </Route>
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </BrowserRouter>
      </PrintersContext.Provider>
    </div>
  );
}

export default App;
