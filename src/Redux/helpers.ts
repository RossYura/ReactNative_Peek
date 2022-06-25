import {CashFlowWithId} from '../types';
import moment, {Moment} from 'moment';
import {getAbsoluteMonths} from '../utils/dates';

export const copyPreviousMonth = (
  state: Record<string, CashFlowWithId[]>,
  {payload: dateTemplate}: {payload: Moment},
) => {
  const months = Object.keys(state)
    .filter((date) =>
      moment(date).isSameOrBefore(dateTemplate.startOf('month')),
    )
    .sort((a, b) => +moment(b) - +moment(a));

  if (!months.length) {
    return state;
  }

  const lastMonth = months[0];
  const date1 = dateTemplate;
  const date2 = moment(lastMonth);
  const differenceInMonths =
    getAbsoluteMonths(date1) - getAbsoluteMonths(date2);

  if (!differenceInMonths) {
    return state;
  }

  const prevMonthData = state[lastMonth]
    .filter(({type}) => type !== 'flexcost')
    .filter((cashFlow) => {
      // do not copy incomes that only occur once
      if (cashFlow.type === 'income' && cashFlow.frequency === 'once') {
        return false;
      }

      return true;
    });

  const concatState: Record<string, CashFlowWithId[]> = {};

  for (let i = 1; i <= differenceInMonths; i++) {
    const date = moment(lastMonth).add(i, 'month');
    const newMonth = date.get('month');
    const newYear = date.get('year');

    const modifiedPrevData = prevMonthData.map((cashFlow) => ({
      ...cashFlow,
      month: newMonth,
      year: newYear,
    })) as CashFlowWithId[];

    const d = date.format('YYYY-MM');

    concatState[d] = modifiedPrevData.concat(state[d] || []);
  }

  return {...state, ...concatState};
};
