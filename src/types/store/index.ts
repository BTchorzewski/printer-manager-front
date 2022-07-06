import { PrinterModel } from '../printer';

export interface AddItemToStoreParam {
  supplyId: string
}

export interface StoreIdParam {
  storeId: string;
}

export interface StoreItem {
  id: string;
  isAvailable: boolean;
  installedAt: Date;
  storedAt: Date;
  name: string;
  model: PrinterModel;
}

export type StoreRespond = {
  msg: 'Succeed';
  data: StoreItem[];
} | {
  msg: 'Fails';
}

export interface BasicStoreItem {
  installedAt: Date;
  name: string;
}
