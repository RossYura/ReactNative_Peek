import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Pig from '../Illustrations/Pig';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';

export interface EmptyListProps {
  title: string;
  btnLabel: string;
  message: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(event: GestureResponderEvent): void;
}

const EmptyList = ({
  btnLabel,
  title,
  onBtnPress,
  onBackBtnPress,
  message,
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
        <Box width="100%" px={18} py={12} minHeight="15%">
          <Button onPress={onBtnPress}>{btnLabel}</Button>
        </Box>
      }>
      <Box
        px={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}>
        <Box mb={42}>
          <Pig />
        </Box>
        <Text color="white" textAlign="center" fontWeight="bold" fontSize={18}>
          {message}
        </Text>
      </Box>
    </Layout>
  );
};

export default EmptyList;
