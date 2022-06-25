import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Duration, {Period} from '../Components/Duration';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import CalendarQuarterly from '../Illustrations/Calendar/Quarterly';

export interface FrequencyListItem {
  period: Period;
}

export interface FrequencyProps {
  title: string;
  active?: Period;
  data: {primaryData: FrequencyListItem[]; secondaryData: FrequencyListItem[]};
  onItemPress(item: FrequencyListItem): void;
  onBackBtnPress(event: GestureResponderEvent): void;
}

const Frequency = ({
  title,
  onBackBtnPress,
  active,
  data,
  onItemPress,
}: FrequencyProps) => {
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
      <Box display="flex" flex={1} px={24} py={16}>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          mb={32}>
          {data.primaryData.map((item) => (
            <Duration
              active={active === item.period}
              period={item.period}
              onPress={() => {
                onItemPress(item);
              }}
            />
          ))}
        </Box>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          {data.secondaryData.map((item) => (
            <Duration
              active={active === item.period}
              period={item.period}
              onPress={() => {
                onItemPress(item);
              }}
            />
          ))}
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center" opacity={0.5}>
          <CalendarQuarterly width="160" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Frequency;
