import {createAction} from 'typesafe-actions';
import {Moment} from 'moment';

import {Account, CashFlow, CashFlowWithId} from '../types';
import {CurrencyCode} from '../utils/currencies';

export const addCashFlow = createAction('ADD_CASH_FLOW')<CashFlow>();

export const updateCashFlow = createAction('UPDATE_CASH_FLOW')<{
  cashFlow: CashFlowWithId;
  prevDate: string;
  prevLabel: string;
}>();

export const deleteCashFlow =
  createAction('DELETE_CASH_FLOW')<CashFlowWithId>();

export const copyPrevMonthRegularCashFlows = createAction(
  'COPY_PREV_MONTH_REGULAR_CASH_FLOWS',
)<Moment>();

export const setCurrency = createAction('SET_CURRENCY')<CurrencyCode>();

export const updateSplashVisited = createAction('UPDATE_SPLASH_VISITED')();

export const hideNewUserModal = createAction('HIDE_NEW_USER_MODAL')();

export const deleteFlexCostLabel = createAction(
  'DELETE_FLEX_COST_LABEL',
)<string>();

export const toggleAccountSelector = createAction('TOGGLE_ACCOUNT_SELECTOR')();

export const addOrUpdateAccount = createAction(
  'ADD_OR_UPDATE_ACCOUNT',
)<Account>();

export const changeActiveAccount = createAction(
  'CHANGE_ACTIVE_ACCOUNT',
)<string>();

export const deleteEditingAccount = createAction('DELETE_EDIT_ACCOUNT')();

export const replaceEditingAccount = createAction(
  'REPLACE_EDIT_ACCOUNT',
)<string>();
