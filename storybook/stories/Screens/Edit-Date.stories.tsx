import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EditDate from '../../../src/Screens/Edit-Date';
import Theme from '../../../src/Theme';

storiesOf('Screens/Edit Date', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <EditDate
      title="Datum ändern"
      onDayPress={action('ON_DAY_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
