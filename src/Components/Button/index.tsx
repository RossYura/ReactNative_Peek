import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {StyledComponent} from 'styled-components';
import styled, {DefaultTheme} from 'styled-components/native';
import {variant as styledVariant} from 'styled-system';

import Box, {BoxProps} from '../Box';
import Text from '../Text';

interface ButtonContentProps {
  variant?: Variants;
}

interface ButtonWrapperProps extends BoxProps {
  variant?: Variants;
}

const ButtonWrapper = styled<
  StyledComponent<typeof View, DefaultTheme, ButtonWrapperProps, never>
>(Box)(
  {
    backgroundColor: 'orange',
  },
  styledVariant({
    variants: {
      disabled: {
        bg: 'blue',
      },
      transparent: {
        bg: 'transparent',
      },
      rounded: {
        width: 56,
        height: 56,
        borderRadius: 23,
      },
    },
  }),
);

type Variants = 'disabled' | 'transparent' | 'rounded';

interface ButtonProps {
  variant?: Variants;
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonContent: React.FC<ButtonContentProps> = ({children, variant}) => {
  return (
    <ButtonWrapper py={5} borderRadius={8} variant={variant}>
      {variant === 'rounded' ? (
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center">
          {children}
        </Box>
      ) : (
        <Text fontFamily="bold" fontSize={1} textAlign="center" color="white">
          {children}
        </Text>
      )}
    </ButtonWrapper>
  );
};

const Button: React.FC<ButtonProps> = ({children, variant, onPress}) => {
  if (variant === 'disabled') {
    return <ButtonContent variant={variant}>{children}</ButtonContent>;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </TouchableOpacity>
  );
};

export default Button;
