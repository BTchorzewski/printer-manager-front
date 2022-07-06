import { createContext } from 'react';

export const PrintersContext = createContext({
  updatePrinters: false,
  setUpdatePrinters: (u: boolean) => {},
});
