import { createContext } from 'react';

export const StoreContext = createContext({
  updateStore: false,
  setUpdateStore: (u: boolean) => {},
});
