import React from 'react';
import Frequency from '../Screens/Frequency';
import {Period} from '../Components/Duration';
import {MainStackProps} from '../Navigation/types';
import {useTranslation} from 'react-i18next';

const fixcostPeriods = {
  primaryData: [
    {
      period: Period.MONTH,
    },
  ],
  secondaryData: [
    {
      period: Period.YEAR,
    },
    {
      period: Period.QUARTER,
    },
    {
      period: Period['2MONTHS'],
    },
    {
      period: Period.HALF_YEAR,
    },
    {
      period: Period['2WEEKS'],
    },
  ],
};

const incomePeriods = {
  primaryData: [
    {
      period: Period.ONCE,
    },
    {
      period: Period.MONTH,
    },
  ],
  secondaryData: [
    {
      period: Period.YEAR,
    },
    {
      period: Period.QUARTER,
    },
    {
      period: Period['2MONTHS'],
    },
    {
      period: Period.HALF_YEAR,
    },
    {
      period: Period['2WEEKS'],
    },
  ],
};

const FrequencyContainer = ({
  navigation,
  route: {params: cashFlow},
}: MainStackProps<'Frequency'>) => {
  const {t} = useTranslation();

  return (
    <Frequency
      title={t('Frequency.title')}
      onBackBtnPress={navigation.goBack}
      onItemPress={(item) => {
        if (cashFlow.type) {
          return navigation.navigate('RegularCashFlowNaming', {
            ...cashFlow,
            frequency: item.period,
          });
        }
        navigation.navigate('EditEntry', {
          field: 'frequency',
          value: item.period,
        });
      }}
      active={cashFlow.type ? undefined : cashFlow.value}
      data={cashFlow.periods === 'income' ? incomePeriods : fixcostPeriods}
    />
  );
};

export default FrequencyContainer;
