import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Pad, {KEY} from '../Components/Pad';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';

export interface EmptyListProps {
  title: string;
  btnLabel: string;
  value: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onKeyPress(key: KEY): void;
  onBtnPress(event: GestureResponderEvent): void;
}

const Amount = ({
  btnLabel,
  title,
  onBtnPress,
  onKeyPress,
  onBackBtnPress,
  value,
}: EmptyListProps) => {
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
      }
      bottom={
        <>
          <Pad onKeyPress={onKeyPress} />
          <Box width="100%" minHeight="15%" px={18} py={12} bg="white">
            <Button onPress={onBtnPress}>{btnLabel}</Button>
          </Box>
        </>
      }>
      <Box flex={1} display="flex" justifyContent="center" px={18}>
        <Text
          numberOfLines={1}
          fontSize={48}
          fontWeight="bold"
          color="white"
          textAlign="center">
          {value}
        </Text>
      </Box>
    </Layout>
  );
};

export default Amount;
