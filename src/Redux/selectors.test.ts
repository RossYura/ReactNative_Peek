import {Period} from '../Components/Duration';
import {FlexCostLabel, Settings, CashFlowWithId} from 'types';
import {
  getAmountForCashFlow,
  getEarlierDate,
  selectMinMaxDates,
} from './selectors';
import {RootState} from './store';

test('select min and max dates', () => {
  const cashFlows: Record<string, CashFlowWithId[]> = {};

  cashFlows['2021-11'] = [
    {
      id: 'cashflow-id',
      amount: 3.3,
      label: 'Coffee',
      date: '12.11.2021',
      type: 'flexcost',
    },
  ];

  cashFlows['2024-03'] = [
    {
      id: 'cashflow-id-2',
      amount: 4.2,
      label: 'Woyton',
      date: '14.12.2021',
      type: 'flexcost',
    },
  ];

  cashFlows['2021-12'] = [
    {
      id: 'cashflow-id-3',
      amount: 4.2,
      label: 'Woyton',
      date: '14.12.2021',
      type: 'flexcost',
    },
  ];

  const flexCostLabel: FlexCostLabel = {
    count: 11,
    label: 'Kaffee',
  };

  const settings: Settings = {
    currency: 'eur',
    splashVisited: true,
    newUserModalHidden: true,
  };

  const state: RootState = {
    cashFlows,
    flexCostLabels: [flexCostLabel],
    settings,
  };

  const result = selectMinMaxDates(state);
  const expected = {min: '2021-11-01', max: '2024-03-31'};

  expect(result).toEqual(expected);
});

test('sort by earliest month', () => {
  expect(getEarlierDate('2021-11', '2021-12')).toBe(-1);
});

test('get monthly amount for quarterly fixcost', () => {
  const cashFlow: CashFlowWithId = {
    id: 'my-cashflow',
    amount: 30,
    label: 'Studio',
    type: 'fixcost',
    frequency: Period.QUARTER,
    month: 12,
    year: 2021,
  };

  const result = getAmountForCashFlow(cashFlow);
  expect(result).toBe(10);
});

test('get monthly amount for yearly fixcost', () => {
  const cashFlow: CashFlowWithId = {
    id: 'my-cashflow',
    amount: 120,
    label: 'Studio',
    type: 'fixcost',
    frequency: Period.YEAR,
    month: 12,
    year: 2021,
  };

  const result = getAmountForCashFlow(cashFlow);
  expect(result).toBe(10);
});

test('get monthly amount for monthly fixcost', () => {
  const cashFlow: CashFlowWithId = {
    id: 'my-cashflow',
    amount: 20,
    label: 'Studio',
    type: 'fixcost',
    frequency: Period.MONTH,
    month: 12,
    year: 2021,
  };

  const result = getAmountForCashFlow(cashFlow);
  expect(result).toBe(20);
});
