import { PrinterModel } from '../printer';

export interface Supply {
  id: string;
  name: string;
  code: string;
  model: PrinterModel;
  printerId?: string;
}

export type AddSupplyRequest = Omit<Supply, 'id'>

export type SupplyParam = {
  id: string;
}

export type SupplyRespond = {
  msg: 'Succeed';
  data: Supply[];
} | {
  msg: string;
  data: null;
}

export interface InstallSupplyRequest {
  printerId: string;
  supplyId: string;
}

export interface SuppliesByModelParam {
  model: PrinterModel;
}

export interface SupplyAvailability {
  id: string;
  name: string;
  total: number;
  totalAvailable: number;
  model?: PrinterModel;
}

export interface ListSupplies {
  id: string;
  name: string;
  model?: PrinterModel;
}

const models = Array.from(Object.values(PrinterModel));
export type Models = typeof models[number];

export type SuppliesWithAvailability = {
  model: PrinterModel;
  supplies: SupplyAvailability[];
};
export type ListSuppliesWithAvailability = SuppliesWithAvailability[];
