import React from 'react';
import {Pressable} from 'react-native';

import Box from '../Box';
import Text from '../Text';

interface ListItemProps {
  label: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({label, children, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {borderRadius: 12, backgroundColor: pressed ? '#2097FF' : '#1484E7'},
      ]}>
      <Box
        height={64}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={12}
        px={5}>
        <Box flexDirection="row" alignItems="center" mr={4}>
          <Box height={32} width={6} bg="#4DAAFC" borderRadius={100} mr={5} />
          <Box maxWidth={'90%'}>
            <Text
              numberOfLines={1}
              color="#E6EBF6"
              fontFamily="medium"
              fontSize={1}>
              {label}
            </Text>
          </Box>
        </Box>
        <Box flex={1} flexDirection="row" justifyContent="flex-end">
          {children}
        </Box>
      </Box>
    </Pressable>
  );
};

export default ListItem;
