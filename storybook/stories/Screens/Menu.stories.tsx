import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import Menu, {MenuItem} from '../../../src/Screens/Menu';
import Theme from '../../../src/Theme';

const items: MenuItem[] = [
  {
    label: 'Settings',
  },
  {
    label: 'Privacy Policy',
  },
  {
    label: 'Imprint',
  },
];

storiesOf('Screens/Menu', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Menu
      title=""
      items={items}
      onItemPress={action('ON_ITEM_PRESS')}
      onCloseBtnPress={action('ON_CLOSE_BUTTON_PRESS')}
    />
  ));
