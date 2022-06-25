import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Box from '../Components/Box';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Logo from '../Illustrations/Logo';
import Layout from '../Layouts/Main';

export interface SplashProps {
  title: string;
  btnLabel: string;
  onBtnPress(event: GestureResponderEvent): void;
}

const Splash = ({btnLabel, title, onBtnPress}: SplashProps) => {
  return (
    <Layout
      bottom={
        <Box width="100%" py={12} px="20%" minHeight="15%">
          <Button onPress={onBtnPress}>{btnLabel}</Button>
        </Box>
      }>
      <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
        <Box mb={42}>
          <Logo />
        </Box>
        <Box>
          <Text color="white" fontSize={48} fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Splash;
