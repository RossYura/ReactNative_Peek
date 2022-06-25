import React from 'react';
import {Pressable} from 'react-native';

import Box from '../Box';
import Text from '../Text';

interface SettingsItemProps {
  title: string;
  value: string;
  iconValue: string;
  onPress: () => void;
}

const SettingsItem = ({
  title,
  value,
  iconValue,
  onPress,
}: SettingsItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box>
          <Text color="white" fontFamily="medium" fontSize={1}>
            {title}
          </Text>
        </Box>
        <Box
          bg="blue"
          flexDirection="row"
          alignItems="center"
          width={1 / 2}
          height={64}
          borderRadius={12}
          px={5}
          justifyContent="space-between">
          <Box>
            <Text color="white" fontFamily="medium" fontSize={1}>
              {value}
            </Text>
          </Box>
          <Box>
            <Box
              borderColor="white"
              borderWidth={3}
              borderRadius={32}
              width={32}
              height={32}
              alignItems="center"
              justifyContent="center">
              <Text color="white" fontFamily="book" fontSize={'8px'}>
                {iconValue}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default SettingsItem;
