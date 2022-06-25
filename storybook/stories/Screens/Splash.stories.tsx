import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import React from 'react';
import {ThemeProvider} from 'styled-components';
import Splash from '../../../src/Screens/Splash';
import Theme from '../../../src/Theme';

storiesOf('Screens/Splash', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Splash
      btnLabel={"Let's Go"}
      title="Bilanz"
      onBtnPress={action('ON_PRESS')}
    />
  ));
