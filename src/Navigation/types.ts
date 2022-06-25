import {StackScreenProps} from '@react-navigation/stack';
import {
  Account,
  CashFlow,
  CashFlowType,
  CashFlowWithId,
  IrregularCashFlow,
  RegularCashFlow,
} from '../types';
import {Period} from '../Components/Duration';
import {AgreementType} from '../agreements';

type CashFlowCreation = {
  type: CashFlowType;
  month: number;
  year: number;
};

export type MainStackParams = {
  Splash: undefined;
  Menu: undefined;
  Dashboard: undefined;
  Amount: {value: number; type?: undefined} | CashFlowCreation;
  EditFieldAutocomplete: CashFlowCreation & {
    amount: number;
  };
  ActionApproval:
    | {cashFlow: CashFlow; deleting?: undefined}
    | {cashFlow: CashFlowWithId; deleting: true};
  EntryList: {
    type: CashFlowType;
    month: number;
    year: number;
  };
  Settings: undefined;
  SettingsCurrency: undefined;
  EditEntry:
    | {
        cashFlow: CashFlowWithId;
        field?: undefined;
        value?: undefined;
      }
    | {
        cashFlow?: undefined;
        field: keyof RegularCashFlow | keyof IrregularCashFlow;
        value: any;
      };
  EditField: {
    value: string;
    type: CashFlowType;
  };
  EditDate: {
    value: string;
  };
  Frequency:
    | (CashFlowCreation & {
        amount: number;
        periods: CashFlowType;
      })
    | {type?: undefined; value: Period; periods: CashFlowType};
  RegularCashFlowNaming: CashFlowCreation & {amount: number; frequency: Period};
  Agreements: {
    type: AgreementType;
  };
  FAQ: undefined;
  FAQDetails: {
    title: string;
    body: string;
  };
  AccountSettings: {
    accountId: string | undefined;
  };
  EditAccount: Account;
};

export type MainStackProps<routeName extends keyof MainStackParams> =
  StackScreenProps<MainStackParams, routeName>;
