import React from 'react';
import {MainStackProps} from '../Navigation/types';
import SettingsCurrency, {Currency} from '../Screens/SettingsCurrency';
import {currencies as codes, currencySymbols} from '../utils/currencies';
import {useTranslation} from 'react-i18next';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const alphabetically = (a: Currency, b: Currency) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

const SettingsCurrencyContainer = ({
  navigation,
}: MainStackProps<'SettingsCurrency'>) => {
  const {t} = useTranslation();
  const setCurrency = useDispatchActions(actions.setCurrency);

  const currencies = codes.map((code) => ({
    code,
    symbol: currencySymbols[code],
    label: t(`Currencies.${code}`),
  }));
  const onItemPress = ({code}: Currency) => {
    setCurrency(code);
    navigation.goBack();
  };

  return (
    <SettingsCurrency
      onItemPress={onItemPress}
      currencies={currencies.sort(alphabetically)}
      title={t('Settings.currency')}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default SettingsCurrencyContainer;
