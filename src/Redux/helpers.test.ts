import {Period} from '../Components/Duration';
import {CashFlowWithId} from 'types';
import {copyPreviousMonth} from './helpers';
import moment from 'moment';

test('copy cash flows over 2 months', () => {
  const state: Record<string, CashFlowWithId[]> = {};

  state['2021-11'] = [
    {
      id: 'cashflow-id',
      amount: 700,
      label: 'Rent',
      frequency: Period.QUARTER,
      type: 'fixcost',
      month: 10,
      year: 2021,
    },
  ];

  const expected = {
    '2021-11': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 10,
        year: 2021,
      },
    ],
    '2021-12': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 11,
        year: 2021,
      },
    ],
    '2022-01': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 0,
        year: 2022,
      },
    ],
  };

  const result = copyPreviousMonth(state, {payload: moment('2022-01')});

  expect(result).toEqual(expected);
});

test('copy cash flows in january 2023', () => {
  const state: Record<string, CashFlowWithId[]> = {};

  state['2022-12'] = [
    {
      id: 'cashflow-id',
      amount: 700,
      label: 'Rent',
      frequency: Period.QUARTER,
      type: 'fixcost',
      month: 11,
      year: 2022,
    },
  ];

  const expected = {
    '2022-12': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 11,
        year: 2022,
      },
    ],
    '2023-01': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 0,
        year: 2023,
      },
    ],
  };

  const result = copyPreviousMonth(state, {payload: moment('2023-01')});

  expect(result).toEqual(expected);
});

test('copy cash flows basic', () => {
  const state: Record<string, CashFlowWithId[]> = {};

  state['2019-12'] = [
    {
      id: 'cashflow-id',
      amount: 700,
      label: 'Rent',
      frequency: Period.QUARTER,
      type: 'fixcost',
      month: 11,
      year: 2019,
    },
  ];

  const expected = {
    '2019-12': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 11,
        year: 2019,
      },
    ],
    '2020-01': [
      {
        id: 'cashflow-id',
        amount: 700,
        label: 'Rent',
        frequency: Period.QUARTER,
        type: 'fixcost',
        month: 0,
        year: 2020,
      },
    ],
  };

  const result = copyPreviousMonth(state, {payload: moment('2020-01')});

  expect(result).toEqual(expected);
});

test('copy cash flows without once income', () => {
  const state: Record<string, CashFlowWithId[]> = {};

  state['2019-12'] = [
    {
      id: 'cashflow-1',
      amount: 10,
      label: 'Salary',
      frequency: Period.MONTH,
      type: 'income',
      month: 11,
      year: 2019,
    },
    {
      id: 'cashflow-2',
      amount: 20,
      label: 'Present',
      frequency: Period.ONCE,
      type: 'income',
      month: 11,
      year: 2019,
    },
  ];

  const expected = {
    '2019-12': [
      {
        id: 'cashflow-1',
        amount: 10,
        label: 'Salary',
        frequency: Period.MONTH,
        type: 'income',
        month: 11,
        year: 2019,
      },
      {
        id: 'cashflow-2',
        amount: 20,
        label: 'Present',
        frequency: Period.ONCE,
        type: 'income',
        month: 11,
        year: 2019,
      },
    ],
    '2020-01': [
      {
        id: 'cashflow-1',
        amount: 10,
        label: 'Salary',
        frequency: Period.MONTH,
        type: 'income',
        month: 0,
        year: 2020,
      },
    ],
  };

  const result = copyPreviousMonth(state, {payload: moment('2020-01')});

  expect(result).toEqual(expected);
});
