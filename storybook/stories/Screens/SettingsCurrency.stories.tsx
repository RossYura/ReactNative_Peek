import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import SettingsCurrency, {
  Currency,
} from '../../../src/Screens/SettingsCurrency';
import Theme from '../../../src/Theme';

const currencies: Currency[] = [
  {
    label: 'Euro',
    symbol: '€',
    active: true,
  },
  {
    label: 'Dollar',
    symbol: '$',
  },
  {
    label: 'Franc',
    symbol: '₣',
  },
  {
    label: 'Lira',
    symbol: '₺',
  },
];

storiesOf('Screens/Settings Currency', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <SettingsCurrency
      onItemPress={action('ON_ITEM_PRESS')}
      currencies={currencies}
      title="Currency"
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
