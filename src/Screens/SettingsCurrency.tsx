import React from 'react';
import {FlatList, GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import SettingsButton from '../Components/SettingsButton';
import {CurrencyCode} from '../utils/currencies';

export interface Currency {
  symbol?: string;
  label: string;
  code: CurrencyCode;
  active?: boolean;
}

export interface SettingsCurrencyProps {
  title: string;
  currencies: Currency[];
  onItemPress(item: Currency): void;
  onBackBtnPress(event: GestureResponderEvent): void;
}

const SettingsCurrency = ({
  title,
  onItemPress,
  onBackBtnPress,
  currencies,
}: SettingsCurrencyProps) => {
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
      <Box width="100%" mt={32} px={18}>
        <FlatList
          data={currencies}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <Box width="100%" mt={15}>
              <SettingsButton
                active={item.active}
                label={item.label}
                onPress={() => onItemPress(item)}
                symbol={item.symbol}
              />
            </Box>
          )}
        />
      </Box>
    </Layout>
  );
};

export default SettingsCurrency;
