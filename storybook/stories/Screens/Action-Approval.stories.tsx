import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import ActionApproval from '../../../src/Screens/Action-Approval';
import Theme from '../../../src/Theme';

storiesOf('Screens/Action Approval', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <ActionApproval
      btnLabel="Yes!"
      title=""
      message="Do you want to add an income ‘Salary’ of 2.000,00€?"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
