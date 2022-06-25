import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EntryList, {EntryListItem} from '../../../src/Screens/Entry-List';
import Theme from '../../../src/Theme';

const data: EntryListItem[] = [
  {label: 'Salary', amount: '2.200,00 €'},
  {label: 'Part time job', amount: '1.100,00 €'},
  {label: 'Other', amount: '830,50 €'},
  {label: 'Other', amount: '102,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
  {label: 'Other', amount: '3,00 €'},
];

storiesOf('Screens/Entry List', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <EntryList
      data={data}
      btnLabel="Add Einkommen"
      title="Einnahmen"
      headline={'November 2020'}
      totalAmount={'4.225,00 €'}
      onItemPress={action('ON_ITEM_PRESS')}
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
