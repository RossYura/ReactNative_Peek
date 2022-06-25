import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import EditFIeldAutoComplete, {
  EditFieldAutocompleteItem,
} from '../../../src/Screens/Edit-Field-Autocomplete';
import Theme from '../../../src/Theme';

const items: EditFieldAutocompleteItem[] = [
  {
    label: 'Icecream',
  },
  {
    label: 'Coffee',
  },
  {
    label: 'Starbucks',
  },
  {
    label: 'Shopping',
  },
  {
    label: 'Dinner',
  },
  {
    label: 'Icecream',
  },
  {
    label: 'Coffee',
  },
  {
    label: 'Starbucks',
  },
  {
    label: 'Shopping',
  },
  {
    label: 'Dinner',
  },
  {
    label: 'Icecream',
  },
  {
    label: 'Coffee',
  },
  {
    label: 'Starbucks',
  },
  {
    label: 'Shopping',
  },
  {
    label: 'Dinner',
  },
  {
    label: 'Icecream',
  },
  {
    label: 'Coffee',
  },
  {
    label: 'Starbucks',
  },
  {
    label: 'Shopping',
  },
  {
    label: 'Dinner',
  },
];

storiesOf('Screens/Edit Field Autocomplete', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <EditFIeldAutoComplete
      btnLabel="Create"
      placeholder="Name the flex cost"
      textFieldLabel="Naming"
      title="Bezeichnung"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
      onItemPress={action('ON_ITEM_PRESS')}
      onItemDelete={action('ON_ITEM_DELETE')}
    />
  ))
  .add('loading', () => (
    <EditFIeldAutoComplete
      btnLabel="Create"
      textFieldLabel="Naming"
      placeholder="Name the flex cost"
      title="Bezeichnung"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
      onItemPress={action('ON_ITEM_PRESS')}
      onItemDelete={action('ON_ITEM_DELETE')}
      loading
    />
  ))
  .add('with items', () => (
    <EditFIeldAutoComplete
      btnLabel="Create"
      textFieldLabel="Naming"
      placeholder="Name the flex cost"
      title="Bezeichnung"
      onBtnPress={action('ON_PRESS')}
      onBackBtnPress={action('ON_BACK_PRESS')}
      onItemPress={action('ON_ITEM_PRESS')}
      onItemDelete={action('ON_ITEM_DELETE')}
      items={items}
    />
  ));
