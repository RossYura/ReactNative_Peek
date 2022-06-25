import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EditField from '../../../src/Screens/Edit-Field';
import Theme from '../../../src/Theme';

storiesOf('Screens/Edit Field', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <EditField
      btnLabel="Create"
      placeholder="Name the income"
      textFieldLabel="Naming"
      title="Bezeichnung"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ))
  .add('wit initial value', () => (
    <EditField
      btnLabel="Save"
      textFieldLabel="Naming"
      title="Bezeichnung"
      initialValue="Salary"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
