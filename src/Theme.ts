import {DefaultTheme} from 'styled-components';

export interface BilanzTheme extends DefaultTheme {
  fonts: {
    book: string;
    medium: string;
    bold: string;
  };
  fontSizes: number[];
  space: number[];
  colors: {
    orange: string;
    blue: string;
    navyBlue: string;
    modal: string;
  };
}

const Theme: BilanzTheme = {
  fonts: {
    book: 'CircularStd-Book',
    medium: 'CircularStd-Medium',
    bold: 'CircularStd-Bold',
  },
  fontSizes: [16, 18, 22, 24, 28, 30, 32, 48],
  space: [0, 1, 2, 4, 8, 16, 24, 32, 40],
  colors: {
    orange: '#FFA500',
    blue: '#1484E7',
    navyBlue: 'rgba(19, 120, 209, 1.00)',
    modal: '#1989ee',
  },
};

export default Theme;
