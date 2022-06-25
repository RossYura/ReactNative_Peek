import React from 'react';
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Layout from '../Layouts/Main';
import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import TextField from '../Components/TextField';
import styled from 'styled-components/native';

const KeyboardWrapper = styled(KeyboardAvoidingView)({
  flex: 1,
});

export interface EditAccountProps {
  title: string;
  btnLabel: string;
  value: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(event: GestureResponderEvent): void;
  onChangeText(text: string): void;
}

const EditAccount = ({
  value,
  title,
  btnLabel,
  onChangeText,
  onBackBtnPress,
  onBtnPress,
}: EditAccountProps) => {
  return (
    <Layout
      top={
        <Box
          width="100%"
          height="80px"
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
        <Box width="100%" py={12} px="10%" minHeight="15%">
          <Button onPress={onBtnPress}>{btnLabel}</Button>
        </Box>
      }>
      <KeyboardWrapper behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}>
          <Box mb={12} width={'100%'} px={16}>
            <TextField
              value={value}
              label={'Account Name'}
              onChangeText={(text) => onChangeText(text)}
            />
          </Box>
        </Box>
      </KeyboardWrapper>
    </Layout>
  );
};

export default EditAccount;
