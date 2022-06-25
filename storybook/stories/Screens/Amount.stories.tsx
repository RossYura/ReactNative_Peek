import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import Amount from '../../../src/Screens/Amount';
import Theme from '../../../src/Theme';

storiesOf('Screens/Amount', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Amount
      value="10 €"
      btnLabel="Weiter"
      title="Betrag"
      onBtnPress={action('ON_BTN_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
      onKeyPress={action('ON_KEY_PRESS')}
    />
  ));
