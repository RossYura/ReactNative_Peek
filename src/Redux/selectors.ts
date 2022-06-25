import {createSelector} from 'reselect';
import {RootState} from './store';
import {
  CashFlowType,
  CashFlowWithId,
  IrregularCashFlow,
  RegularCashFlow,
} from '../types';
import moment from 'moment';
import {getDateFromCashFlow} from '../utils/dates';
import {CurrencyCode, getDisplayMoney} from '../utils/currencies';
import {Period} from '../Components/Duration';

type FilterResult<T> = T extends 'flexcost'
  ? (IrregularCashFlow & {id: string})[]
  : (RegularCashFlow & {id: string})[];

export const filterCashFlowsByType = <T extends CashFlowType>(
  cashFlows: CashFlowWithId[],
  type: T,
  month?: number,
  year?: number,
): FilterResult<T> => {
  const result = cashFlows.filter((cashFlow) => {
    if (cashFlow.type !== type) {
      return false;
    }

    if (typeof month === 'undefined') {
      return true;
    }

    if (cashFlow.type === 'flexcost') {
      const date = moment(cashFlow.date);
      return date.get('month') === month && date.get('year') === year;
    }

    return cashFlow.month === month && cashFlow.year === year;
  });

  if (type === 'flexcost') {
    return result as FilterResult<T>;
  }
  return result as FilterResult<T>;
};

const monthsByPeriod: Record<Period, number> = {
  [Period.ONCE]: 1,
  [Period['2WEEKS']]: 0.5,
  [Period.MONTH]: 1,
  [Period['2MONTHS']]: 2,
  [Period.QUARTER]: 3,
  [Period.HALF_YEAR]: 6,
  [Period.YEAR]: 12,
};

export const getAmountForCashFlow = (cashFlow: CashFlowWithId) => {
  if (cashFlow.type === 'flexcost') {
    return cashFlow.amount;
  }

  return cashFlow.amount / monthsByPeriod[cashFlow.frequency];
};

const selectCashFlows = (state: RootState) => state.cashFlows;

export const selectCurrency = createSelector(
  (state: RootState) => state.settings,
  ({currency}) => currency,
);

export const selectSplashVisited = createSelector(
  (state: RootState) => state.settings,
  ({splashVisited}) => splashVisited,
);

export const selectNewUserModalHidden = createSelector(
  (state: RootState) => state.settings,
  ({newUserModalHidden}) => newUserModalHidden,
);

export const getAccountsSelectorDisplay = createSelector(
  (state: RootState) => state.accounts,
  (accountState) => accountState.showAccountSelector,
);

export const getAccounts = createSelector(
  (state: RootState) => state.accounts,
  (accountState) => accountState.accounts,
);

export const getActiveAccount = createSelector(
  (state: RootState) => state.accounts,
  (accountState) => accountState.accounts.find((account) => account.active),
);

export const getCurrentEditAccount = createSelector(
  (state: RootState) => state.accounts,
  (accountState) => accountState.accounts.find((account) => account.editing),
);

export const selectFlexCostsLabels = createSelector(
  (state: RootState) => state.flexCostLabels,
  (labels) => labels.sort((a, b) => b.count - a.count),
);

export const selectCashFlowsForMonth = createSelector<
  RootState,
  {type: CashFlowType; month: number; year: number},
  RootState['cashFlows'],
  CurrencyCode,
  CashFlowType,
  number,
  number,
  {
    total: string;
    data: CashFlowWithId[];
    sections?: {date: string; data: CashFlowWithId[]}[];
  }
>(
  [
    selectCashFlows,
    selectCurrency,
    (_: RootState, {type}) => type,
    (_: RootState, {month}) => month,
    (_: RootState, {year}) => year,
  ],
  (cashFlows, currency, type, month, year) => {
    const date = getDateFromCashFlow({month, year});

    let data = filterCashFlowsByType(
      cashFlows[date],
      type,
    ).reverse() as CashFlowWithId[];

    let sections;

    if (type === 'flexcost') {
      data = data.sort((a, b) => {
        if (a.type === 'flexcost' && b.type === 'flexcost') {
          return +moment(a.date) - +moment(b.date);
        }
        return 0;
      });

      const sectionsByDates = (
        data as (IrregularCashFlow & {id: string})[]
      ).reduce((acc, flexCost) => {
        const flexCostDate = moment(flexCost.date).format('YYYY-MM-DD');
        if (acc[flexCostDate]) {
          acc[flexCostDate].push(flexCost);
        } else {
          acc[flexCostDate] = [flexCost];
        }
        return acc;
      }, {} as Record<string, CashFlowWithId[]>);

      sections = Object.entries(sectionsByDates)
        .map(([flexCostDate, flexCosts]) => ({
          date: flexCostDate,
          data: flexCosts,
        }))
        .sort((a, b) => {
          return +moment(b.date) - +moment(a.date);
        });
    } else {
      data = data.sort((a, b) => {
        return getAmountForCashFlow(b) - getAmountForCashFlow(a);
      });
    }

    return {
      data,
      sections,
      total: getDisplayMoney(
        data.reduce((acc, cashFlow) => acc + getAmountForCashFlow(cashFlow), 0),
        currency,
      ),
    };
  },
);

export const selectDashboard = createSelector(
  [selectCashFlows, selectCurrency],
  (cashFlowsByMonths, currency) => {
    return Object.entries(cashFlowsByMonths)
      .map(([key, cashFlows]) => {
        const date = moment(key);

        const values = {
          income: 0,
          fixcost: 0,
          flexcost: 0,
        };

        cashFlows.forEach((cashFlow) => {
          values[cashFlow.type] += getAmountForCashFlow(cashFlow);
        });

        const total = values.income - values.fixcost - values.flexcost;

        return {
          year: date.get('year'),
          month: date.get('month'),
          total: getDisplayMoney(total, currency),
          items: Object.entries(values).map(([type, value]) => ({
            type: type as CashFlowType,
            value: getDisplayMoney(value, currency),
          })),
        };
      })
      .sort(
        (a, b) =>
          +moment({month: b.month, year: b.year}) -
          +moment({month: a.month, year: a.year}),
      );
  },
);

export const getEarlierDate = (a: string, b: string) => {
  return moment(a).isBefore(b) ? -1 : 1;
};

export const selectMinMaxDates = createSelector(
  selectCashFlows,
  (cashFlows) => {
    const months = Object.keys(cashFlows).sort(getEarlierDate);
    const min = moment(months[0]).format('YYYY-MM-DD');
    const max = moment(months[months.length - 1])
      .endOf('month')
      .format('YYYY-MM-DD');

    return {
      min,
      max,
    };
  },
);
