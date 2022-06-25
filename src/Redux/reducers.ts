import {createReducer} from 'typesafe-actions';
import * as actions from './actions';
import {RootAction} from './store';
import {Accounts, CashFlowWithId, FlexCostLabel, Settings} from '../types';
import {v4} from 'uuid';
import moment from 'moment';
import {getDateFromCashFlow} from '../utils/dates';
import {copyPreviousMonth} from './helpers';

const initialValue = {
  [getDateFromCashFlow({
    month: moment().get('month'),
    year: moment().get('year'),
  })]: [],
};

export const cashFlows = createReducer<
  Record<string, CashFlowWithId[]>,
  RootAction
>(initialValue)
  .handleAction(actions.addCashFlow, (state, {payload: cashFlow}) => {
    const date = getDateFromCashFlow(cashFlow);
    return {...state, [date]: state[date].concat({...cashFlow, id: v4()})};
  })
  .handleAction(actions.deleteCashFlow, (state, {payload: cashFlow}) => {
    const date = getDateFromCashFlow(cashFlow);
    return {...state, [date]: state[date].filter(({id}) => id !== cashFlow.id)};
  })
  .handleAction(
    actions.updateCashFlow,
    (state, {payload: {cashFlow, prevDate}}) => {
      const date = getDateFromCashFlow(cashFlow);

      if (prevDate !== date) {
        return {
          ...state,
          [prevDate]: state[prevDate].filter(({id}) => id !== cashFlow.id),
          [date]: (state[date] || []).concat([cashFlow]),
        };
      }

      return {
        ...state,
        [date]: state[date].map((cf) =>
          cf.id === cashFlow.id ? cashFlow : cf,
        ),
      };
    },
  )
  .handleAction(actions.copyPrevMonthRegularCashFlows, copyPreviousMonth);

export const flexCostLabels = createReducer<FlexCostLabel[], RootAction>([])
  .handleAction(actions.addCashFlow, (state, {payload: cashFlow}) => {
    if (cashFlow.type !== 'flexcost') {
      return state;
    }

    const index = state.findIndex(({label}) => label === cashFlow.label);

    if (index < 0) {
      return [{label: cashFlow.label, count: 1}, ...state];
    }

    return state.map((label, i) =>
      i === index ? {...label, count: label.count + 1} : label,
    );
  })
  .handleAction(
    actions.updateCashFlow,
    (state, {payload: {cashFlow, prevLabel}}) => {
      if (cashFlow.type !== 'flexcost' || cashFlow.label === prevLabel) {
        return state;
      }

      const index = state.findIndex(({label}) => label === cashFlow.label);

      const reducedPrevCountState = state.map((label) =>
        label.label === prevLabel ? {...label, count: label.count - 1} : label,
      );

      if (index < 0) {
        return [{label: cashFlow.label, count: 1}, ...reducedPrevCountState];
      }

      return reducedPrevCountState.map((label, i) =>
        i === index ? {...label, count: label.count + 1} : label,
      );
    },
  )
  .handleAction(actions.deleteCashFlow, (state, {payload: cashFlow}) => {
    return state.map((label) =>
      label.label === cashFlow.label
        ? {...label, count: label.count - 1}
        : label,
    );
  })
  .handleAction(actions.deleteFlexCostLabel, (state, {payload}) =>
    state.filter((label) => label.label !== payload),
  );

export const settings = createReducer<Settings, RootAction>({
  currency: 'eur',
  splashVisited: false,
  newUserModalHidden: false,
})
  .handleAction(actions.setCurrency, (state, {payload: currency}) => ({
    ...state,
    currency,
  }))
  .handleAction(actions.hideNewUserModal, (state) => ({
    ...state,
    newUserModalHidden: true,
  }))
  .handleAction(actions.updateSplashVisited, (state) => ({
    ...state,
    splashVisited: true,
  }));

export const accounts = createReducer<Accounts, RootAction>({
  showAccountSelector: false,
  accounts: [],
})
  .handleAction(actions.toggleAccountSelector, (state) => ({
    ...state,
    showAccountSelector: !state.showAccountSelector,
  }))
  .handleAction(actions.addOrUpdateAccount, (state, {payload: account}) => {
    if (state.accounts.find((one) => one.id === account.id)) {
      return {
        ...state,
        accounts: state.accounts.map((one) => {
          if (one.id === account.id) {
            return account;
          } else {
            return one;
          }
        }),
      };
    } else {
      return {
        ...state,
        accounts: [...state.accounts, account],
      };
    }
  })
  .handleAction(actions.changeActiveAccount, (state, {payload: id}) => {
    return {
      ...state,
      accounts: state.accounts.map((one) => {
        if (one.id === id) {
          return {...one, active: true};
        } else {
          return {...one, active: false};
        }
      }),
    };
  })
  .handleAction(actions.deleteEditingAccount, (state) => {
    return {
      ...state,
      accounts: state.accounts.map((one) => {
        return {...one, editing: false};
      }),
    };
  })
  .handleAction(actions.replaceEditingAccount, (state, {payload: id}) => {
    return {
      ...state,
      accounts: state.accounts.map((one) => {
        if (one.id === id) {
          return {...one, editing: true};
        } else {
          return {...one, editing: false};
        }
      }),
    };
  });
