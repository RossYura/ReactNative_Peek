import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import Dashboard from '../../../src/Screens/Dashboard';
import Theme from '../../../src/Theme';
import {Sheet} from 'Components/SheetCarousel';

const sheets: Sheet[] = [
  {
    title: 'Monatsbilanz',
    month: 'Oktober 2020',
    total: '199,50€',
    items: [
      {id: 'Oktober 2020 - Einnahmen', label: 'Einnahmen', value: '2.000,00€'},
      {id: 'Oktober 2020 - Fixkosten', label: 'Fixkosten', value: '1.200,00€'},
      {id: 'Oktober 2020 - Flexkosten', label: 'Flexkosten', value: '600,50€'},
    ],
  },
  {
    title: 'Monatsbilanz',
    month: 'November 2020',
    total: '199,50€',
    items: [
      {id: 'November 2020 - Einnahmen', label: 'Einnahmen', value: '2.000,00€'},
      {id: 'November 2020 - Fixkosten', label: 'Fixkosten', value: '1.200,00€'},
      {id: 'November 2020 - Flexkosten', label: 'Flexkosten', value: '600,50€'},
    ],
  },
  {
    title: 'Monatsbilanz',
    month: 'Dezember 2020',
    total: '199,50€',
    items: [
      {id: 'Dezember 2020 - Einnahmen', label: 'Einnahmen', value: '2.000,00€'},
      {id: 'Dezember 2020 - Fixkosten', label: 'Fixkosten', value: '1.200,00€'},
      {id: 'Dezember 2020 - Flexkosten', label: 'Flexkosten', value: '600,50€'},
    ],
  },
];

storiesOf('Screens/Dashboard', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Dashboard
      btnLabel="Yes!"
      title=""
      onMenuBtnPress={action('ON_MENU_PRESS')}
      onBtnPress={action('ON_BUTTON_PRESS')}
      sheets={sheets}
      onItemPress={action('ON_ITEM_PRESS')}
    />
  ));
