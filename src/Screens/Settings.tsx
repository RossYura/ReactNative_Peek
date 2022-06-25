import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import SettingsButton from '../Components/SettingsButton';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import {Currency} from './SettingsCurrency';
import {useTranslation} from 'react-i18next';

export interface SettingsCurrencyProps {
  title: string;
  currency: Currency;
  onCurrencyPress(): void;
  onBackBtnPress(event: GestureResponderEvent): void;
}

const SettingsCurrency = ({
  title,
  onBackBtnPress,
  onCurrencyPress,
  currency,
}: SettingsCurrencyProps) => {
  const {t} = useTranslation();

  return (
    <Layout
      top={
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" left={0}>
            <Button variant="transparent" onPress={onBackBtnPress}>
              <Box width={24} height={24}>
                <ChevronLeft />
              </Box>
            </Button>
          </Box>

          <Box height={32}>
            <Text color="white" fontSize={22} fontWeight={700}>
              {title}
            </Text>
          </Box>
        </Box>
      }>
      <Box px={18} mt={42}>
        <Box display="flex" flexDirection="row">
          <Box flex={1} display="flex" justifyContent="center">
            <Text color="white" fontWeight="500" fontSize={18}>
              {t('Settings.currency')}
            </Text>
          </Box>
          <Box flex={1}>
            <SettingsButton
              label={currency.label}
              symbol={currency.symbol}
              onPress={onCurrencyPress}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default SettingsCurrency;
