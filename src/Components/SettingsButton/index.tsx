import React from 'react';
import {Pressable} from 'react-native';

import Box from '../Box';
import Text from '../Text';

interface SettingsButtonProps {
  label: string;
  active?: boolean;
  onPress: () => void;
  symbol?: string;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({
  label,
  active = false,
  onPress,
  symbol,
}) => {
  const calculateStyles = (isActive: boolean, pressed: boolean) => {
    const bgBaseColor = isActive ? 'white' : '#1484E7';

    return [
      {borderRadius: 12, backgroundColor: pressed ? '#2097FF' : bgBaseColor},
    ];
  };

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => calculateStyles(active, pressed)}>
      <Box
        height={64}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={12}
        px={5}>
        <Box flexDirection="row" alignItems="center">
          <Box>
            <Text
              color={active ? 'blue' : '#E6EBF6'}
              fontFamily="medium"
              fontSize={1}>
              {label}
            </Text>
          </Box>
        </Box>
        {symbol && (
          <Box>
            <Box
              borderColor={active ? '#1484E7' : 'white'}
              borderWidth={3}
              borderRadius={32}
              width={32}
              height={32}
              alignItems="center"
              justifyContent="center">
              <Text
                textAlign="center"
                color={active ? '#1484E7' : 'white'}
                fontFamily="book"
                fontSize={'16px'}>
                {symbol}
              </Text>
            </Box>
          </Box>
        )}
      </Box>
    </Pressable>
  );
};

export default SettingsButton;
