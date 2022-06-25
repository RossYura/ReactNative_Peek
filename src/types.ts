import {Period} from './Components/Duration';
import {CurrencyCode} from './utils/currencies';

export type RegularCashFlowType = 'income' | 'fixcost';
export type IrregularCashFlowType = 'flexcost';

export type CashFlowType = RegularCashFlowType | IrregularCashFlowType;

export type BaseCashFlow = {
  amount: number;
  label: string;
};

export type RegularCashFlow = BaseCashFlow & {
  month: number;
  year: number;
  frequency: Period;
  type: RegularCashFlowType;
};

export type IrregularCashFlow = BaseCashFlow & {
  date: string;
  type: IrregularCashFlowType;
};

export type CashFlow = RegularCashFlow | IrregularCashFlow;

export type CashFlowWithId = CashFlow & {id: string};

export type Search = {
  type: CashFlowType;
  month: number;
  year: number;
};

export type Settings = {
  currency: CurrencyCode;
  splashVisited: boolean;
  newUserModalHidden: boolean;
};

export type FlexCostLabel = {
  count: number;
  label: string;
};

export type Account = {
  id: string;
  imageUri: string;
  name: string;
  active: boolean;
  settings?: Settings;
  editing: boolean;
};

export type Accounts = {
  showAccountSelector: boolean;
  accounts: Account[];
};
