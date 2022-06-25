import moment, {Moment} from 'moment';
import {CashFlow} from '../types';

export const getDisplayDate = (date: {month: number; year: number}) => {
  return moment(date).format('MMMM YYYY');
};

export const getDateFromCashFlow = (
  cashFlow: CashFlow | {year: number; month: number; type?: undefined},
) => {
  let date: Moment;
  if (cashFlow.type === 'flexcost') {
    date = moment(cashFlow.date);
  } else {
    date = moment({year: cashFlow.year, month: cashFlow.month});
  }
  return date.format('YYYY-MM');
};

export const getAbsoluteMonths = (momentDate: Moment) => {
  const months = Number(momentDate.format('MM'));
  const years = Number(momentDate.format('YYYY'));
  return months + years * 12;
};
