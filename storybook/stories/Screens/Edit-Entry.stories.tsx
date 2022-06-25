import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EditEntry, {EditEntryItem} from '../../../src/Screens/Edit-Entry';
import Theme from '../../../src/Theme';

const itemsIncome: EditEntryItem[] = [
  {label: 'Naming', value: 'Salary'},
  {label: 'Frequency', value: 'Monthly'},
  {label: 'Amount', value: '2.000,00 €'},
];

const itemsExpense: EditEntryItem[] = [
  {label: 'Naming', value: 'Coffee'},
  {label: 'Date', value: '21/01/2021'},
  {label: 'Cost', value: '10 €'},
];

storiesOf('Screens/Edit Entry', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('with income', () => (
    <EditEntry
      items={itemsIncome}
      btnLabel="Save"
      deleteBtnLabel="Delete income"
      title="Eintrag bearbeiten"
      btnDisabled
      onItemPress={action('ON_ITEM_PRESS')}
      onBtnPress={action('ON_PRESS')}
      onDeleteBtnPress={action('ON_DELETE_BTN_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ))
  .add('with expense', () => (
    <EditEntry
      items={itemsExpense}
      btnLabel="Save"
      deleteBtnLabel="Delete Flexcosten"
      btnDisabled
      title="Eintrag bearbeiten"
      onBtnPress={action('ON_PRESS')}
      onItemPress={action('ON_ITEM_PRESS')}
      onDeleteBtnPress={action('ON_DELETE_BTN_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ))
  .add('with button enabled', () => (
    <EditEntry
      items={itemsIncome}
      btnLabel="Save"
      deleteBtnLabel="Delete income"
      title="Eintrag bearbeiten"
      btnDisabled={false}
      deleteBtnDisabled={false}
      onItemPress={action('ON_ITEM_PRESS')}
      onBtnPress={action('ON_PRESS')}
      onDeleteBtnPress={action('ON_DELETE_BTN_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ))
  .add('with delete button disabled', () => (
    <EditEntry
      items={itemsIncome}
      btnLabel="Save"
      deleteBtnLabel="Delete income"
      title="Eintrag bearbeiten"
      btnDisabled={false}
      deleteBtnDisabled
      onItemPress={action('ON_ITEM_PRESS')}
      onBtnPress={action('ON_PRESS')}
      onDeleteBtnPress={action('ON_DELETE_BTN_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
    />
  ));
