import React, {useState} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import TextField from '../Components/TextField';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';

export interface EditFieldProps {
  title: string;
  btnLabel: string;
  textFieldLabel: string;
  placeholder?: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(value: string): void;
  initialValue?: string;
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

const EditField = ({
  btnLabel,
  textFieldLabel,
  placeholder,
  title,
  onBtnPress,
  onBackBtnPress,
  initialValue,
}: EditFieldProps) => {
  const [value, setValue] = useState<string>(initialValue || '');

  const handleButtonPress = () => {
    onBtnPress(value);
  };

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 24}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.contentContainer}>
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
            <Button
              variant={value.length === 0 ? 'disabled' : undefined}
              onPress={handleButtonPress}>
              {btnLabel}
            </Button>
          </Box>
        }>
        <Box display="flex" flex={1} pt={24}>
          <Box flex={1} px={32} pt="25%">
            <TextField
              placeholder={placeholder}
              defaultValue={initialValue}
              label={textFieldLabel}
              onChangeText={handleChange}
            />
          </Box>
        </Box>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default EditField;
