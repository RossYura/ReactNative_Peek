import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EmptyList from '../../../src/Screens/Empty-List';
import Theme from '../../../src/Theme';

storiesOf('Screens/Empty List', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <EmptyList
      btnLabel="Create Einkommen"
      title="Einnahmen"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
