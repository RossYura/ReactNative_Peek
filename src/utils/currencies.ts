export const currencies = [
  'eur',
  'usd',
  'chf',
  'dkk',
  'gbp',
  'sek',
  'pln',
  'czk',
  'huf',
  'bgn',
  'ron',
] as const;

export const currencySymbols: Record<CurrencyCode, string> = {
  eur: '€',
  usd: '$',
  chf: 'Fr.',
  dkk: 'kr',
  gbp: '£',
  sek: 'kr',
  pln: 'zł',
  czk: 'Kč',
  huf: 'Ft',
  bgn: 'Лв.',
  ron: 'lei',
};

export type CurrencyCode = typeof currencies[number];

export const formatMoney = function (
  val: number,
  n = 2,
  x = 3,
  s = '.',
  c = ',',
) {
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = val.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + s);
};

export const getDisplayMoney = (value: number, currency: CurrencyCode) => {
  return `${formatMoney(value)} ${currencySymbols[currency]}`;
};
