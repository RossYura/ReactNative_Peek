import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import Settings from '../../../src/Screens/Settings';
import Theme from '../../../src/Theme';
import {Currency} from '../../../src/Screens/SettingsCurrency';

const currency: Currency = {
  label: 'Euro',
  symbol: '€',
};

storiesOf('Screens/Settings', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Settings
      currency={currency}
      title="Settings"
      onCurrencyPress={action('ON_CURRENCY_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
