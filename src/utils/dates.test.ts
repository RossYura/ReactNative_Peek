import moment from 'moment';

import {getAbsoluteMonths} from './dates';

test('get absolute months', () => {
  expect(getAbsoluteMonths(moment('0000-01-01'))).toEqual(1);
  expect(getAbsoluteMonths(moment('1984-09-01'))).toEqual(23817);
});
