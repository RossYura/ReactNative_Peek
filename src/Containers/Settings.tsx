import React from 'react';
import Settings from '../Screens/Settings';
import {MainStackProps} from '../Navigation/types';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectCurrency} from '../Redux/selectors';
import {currencySymbols} from '../utils/currencies';

const SettingsContainer = ({navigation}: MainStackProps<'Settings'>) => {
  const {t} = useTranslation();

  const code = useSelector(selectCurrency);

  const currency = {
    code,
    symbol: currencySymbols[code],
    label: t(`Currencies.${code}`),
  };

  return (
    <Settings
      currency={currency}
      title={t('Settings.title')}
      onCurrencyPress={() => navigation.navigate('SettingsCurrency')}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default SettingsContainer;
