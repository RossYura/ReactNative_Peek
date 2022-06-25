import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Box from '../Box';
import Text from '../Text';

interface PropertyButtonProps {
  label: string;
  content: string;
  onPress: (event: GestureResponderEvent) => void;
}

const PropertyButton: React.FC<PropertyButtonProps> = ({
  label,
  content,
  onPress,
}) => {
  return (
    <Box height={120} paddingLeft={32} paddingRight={32}>
      <Box flexDirection="row" alignItems="center" marginBottom={5}>
        <Text color={'#E6EBF6'} fontFamily="medium" fontSize={1}>
          {label}
        </Text>
      </Box>
      <TouchableOpacity onPress={onPress}>
        <Box
          backgroundColor={'#1383E6'}
          height={64}
          borderRadius={12}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          paddingX={24}>
          <Box flex={1}>
            <Text
              textAlign="left"
              color={'#E6EBF6'}
              fontFamily="book"
              fontSize={'16px'}>
              {content}
            </Text>
          </Box>
          <Icon name={'chevron-right'} size={24} color="white" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default PropertyButton;
