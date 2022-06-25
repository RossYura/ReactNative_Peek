import {getDisplayMoney, formatMoney} from './currencies';

test('display euro amounts', () => {
  expect(getDisplayMoney(0, 'eur')).toEqual('0,00 €');
  expect(getDisplayMoney(0.5, 'eur')).toEqual('0,50 €');
  expect(getDisplayMoney(10, 'eur')).toEqual('10,00 €');
  expect(getDisplayMoney(100, 'eur')).toEqual('100,00 €');
  expect(getDisplayMoney(1000, 'eur')).toEqual('1.000,00 €');
});

test('display dkk amounts', () => {
  expect(getDisplayMoney(0, 'dkk')).toEqual('0,00 kr');
  expect(getDisplayMoney(0.5, 'dkk')).toEqual('0,50 kr');
  expect(getDisplayMoney(10, 'dkk')).toEqual('10,00 kr');
  expect(getDisplayMoney(100, 'dkk')).toEqual('100,00 kr');
  expect(getDisplayMoney(1000, 'dkk')).toEqual('1.000,00 kr');
});

test('display usd amounts', () => {
  expect(getDisplayMoney(0, 'usd')).toEqual('0,00 $');
  expect(getDisplayMoney(0.5, 'usd')).toEqual('0,50 $');
  expect(getDisplayMoney(10, 'usd')).toEqual('10,00 $');
  expect(getDisplayMoney(100, 'usd')).toEqual('100,00 $');
  expect(getDisplayMoney(1000, 'usd')).toEqual('1.000,00 $');
});

test('display chf amounts', () => {
  expect(getDisplayMoney(0, 'chf')).toEqual('0,00 Fr.');
  expect(getDisplayMoney(0.5, 'chf')).toEqual('0,50 Fr.');
  expect(getDisplayMoney(10, 'chf')).toEqual('10,00 Fr.');
  expect(getDisplayMoney(100, 'chf')).toEqual('100,00 Fr.');
  expect(getDisplayMoney(1000, 'chf')).toEqual('1.000,00 Fr.');
});

test('format money', () => {
  expect(formatMoney(0)).toEqual('0,00');
  expect(formatMoney(0.1)).toEqual('0,10');
  expect(formatMoney(10)).toEqual('10,00');
  expect(formatMoney(100)).toEqual('100,00');
  expect(formatMoney(1000)).toEqual('1.000,00');
  expect(formatMoney(1000, 1)).toEqual('1.000,0');
  expect(formatMoney(1000, 3)).toEqual('1.000,000');
  expect(formatMoney(1000, 0)).toEqual('1.000');
  expect(formatMoney(1000, 2, 2)).toEqual('10.00,00');
  expect(formatMoney(1000, 1, 4)).toEqual('1000,0');
  expect(formatMoney(1000, 1, 5)).toEqual('1000,0');
  expect(formatMoney(1000, 2, 3, '##')).toEqual('1##000,00');
  expect(formatMoney(1000, 2, 3, '.', '##')).toEqual('1.000##00');
});
