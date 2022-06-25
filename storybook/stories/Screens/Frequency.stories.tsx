import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ThemeProvider} from 'styled-components';
import Frequency, {FrequencyListItem} from '../../../src/Screens/Frequency';
import Theme from '../../../src/Theme';
import {Period} from '../../../src/Components/Duration';

const data: FrequencyListItem[] = [
  {
    active: true,
    period: Period.MONTH,
  },
  {
    period: Period.QUARTER,
  },
  {
    period: Period.YEAR,
  },
];

storiesOf('Screens/Frequency', module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>
  ))
  .add('default', () => (
    <Frequency
      title="Häufigkeit"
      onBackBtnPress={action('ON_BACK_PRESS')}
      onItemPress={action('ON_ITEM_PRESS')}
      data={data}
    />
  ));
