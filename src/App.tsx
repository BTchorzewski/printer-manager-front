import React, { useState } from 'react';
import './sass/_variables.scss';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PrintersPage } from './pages/Printers/PrintersPage';
import { ManagePrinterPage } from './pages/Printer/ManagePrinterPage';
import { EditPrinterPage } from './pages/Printer/EditPrinterPage';
import { StorePage } from './pages/Store/StorePage';
import { SuppliesPage } from './pages/Supplies/SuppliesPage';
import { NotFoundPage } from './pages/error/NotFoundPage';
import { PrintersContext } from './context/printers-context';
import { StoreContext } from './context/store-context';
import { PrinterContext } from './context/printer-context';

function App() {
  const [updatePrinters, setUpdatePrinters] = useState(false);
  const [updateStore, setUpdateStore] = useState(false);
  const [updatePrinter, setUpdatePrinter] = useState(false);

  return (
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <StoreContext.Provider value={{ updateStore, setUpdateStore }}>
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <PrintersContext.Provider value={{ updatePrinters, setUpdatePrinters }}>
          {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
          <PrinterContext.Provider value={{ updatePrinter, setUpdatePrinter }}>
            <BrowserRouter>
              <Routes>
                {/* eslint-disable-next-line react/no-children-prop */}
                <Route path="/" element={<Layout children={<Dashboard />} />} />
                {/* @todo add pagination to printers page */}
                <Route path="printers" element={<Layout><PrintersPage /></Layout>} />
                <Route path="printer">
                  <Route path="manage/:printerId" element={<Layout><ManagePrinterPage /></Layout>} />
                  <Route path="edit/:printerId" element={<Layout><EditPrinterPage /></Layout>} />
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
          </PrinterContext.Provider>
        </PrintersContext.Provider>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
