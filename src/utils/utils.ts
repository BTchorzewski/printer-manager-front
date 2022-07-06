import { AddPrinterRequest } from '../types';

export const isMultifunctionYesNoLabel = (param: boolean): string => (param ? 'Yes' : 'No');

export enum PrinterModel {
  Xerox_AltaLink_C8035 = 'Xerox AltaLink C8035',
  Xerox_VersaLink_C605 = 'Xerox VersaLink C605',
  Xerox_VersaLink_C400 = 'Xerox VersaLink C400',
}
