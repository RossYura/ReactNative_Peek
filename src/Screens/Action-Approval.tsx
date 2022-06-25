import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Wallet from '../Illustrations/Wallet';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import Trash from '../Illustrations/Trash';

export interface ActionApprovalProps {
  title: string;
  message: string;
  btnLabel: string;
  deleting?: boolean;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(event: GestureResponderEvent): void;
}

const ActionApproval = ({
  btnLabel,
  title,
  message,
  deleting,
  onBtnPress,
  onBackBtnPress,
}: ActionApprovalProps) => {
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
        <Box width="100%" minHeight="15%" px={18} py={12}>
          <Button onPress={onBtnPress}>{btnLabel}</Button>
        </Box>
      }>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        px={12}>
        <Box mb={42}>{deleting ? <Trash /> : <Wallet />}</Box>
        <Text color="white" textAlign="center" fontWeight="bold" fontSize={18}>
          {message}
        </Text>
      </Box>
    </Layout>
  );
};

export default ActionApproval;
