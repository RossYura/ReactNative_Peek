import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {BilanzTheme} from 'Theme';

import Box from '../Box';
import Text from '../Text';

export interface TextFieldProps extends TextInputProps {
  label: string;
}

const TextInput = styled.TextInput`
  color: white;
  font-family: ${(props: {theme: BilanzTheme}) => props.theme.fonts.medium};
  font-size: ${(props: {theme: BilanzTheme}) =>
    `${props.theme.fontSizes[3]}px`};
`;

const TextField = ({
  label,
  autoFocus,
  placeholder,
  defaultValue,
  onChangeText,
  value,
}: TextFieldProps) => {
  return (
    <Box borderBottomWidth={1} borderBottomColor="white" px={4} pb={4}>
      <Box mb={2}>
        <Text fontFamily="book" fontSize={14} color="rgba(255,255,255,0.75)">
          {label}
        </Text>
      </Box>
      <TextInput
        selectionColor="rgba(255,255,255,0.5)"
        autoFocus={autoFocus}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.25)"
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        value={value}
        allowFontScaling={false}
      />
    </Box>
  );
};

export default TextField;
