import { createContext } from 'react';

export const PrinterContext = createContext({
  updatePrinter: false,
  setUpdatePrinter: (u: boolean) => {},
});
