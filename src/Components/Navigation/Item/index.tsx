import React from 'react';
import {Pressable} from 'react-native';

import Box from '../../Box';
import Text from '../../Text';
import {useTranslation} from 'react-i18next';

interface ItemProps {
  label: string;
  onPress: () => void;
}

const Item = ({label, onPress}: ItemProps) => {
  const {t} = useTranslation();
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => {
        return (
          <Box
            height={94}
            bg={pressed ? 'rgba(255,255,255, 0.1)' : null}
            alignItems="center"
            justifyContent="center"
            borderTopLeftRadius={8}
            borderBottomLeftRadius={8}
            borderTopRightRadius={8}
            borderBottomRightRadius={8}
            px={12}>
            <Box
              alignItems="center"
              justifyContent="center"
              bg={pressed ? 'rgba(255,255,255, 0.1)' : null}
              height={70}
              width={'100%'}
              borderTopLeftRadius={8}
              borderBottomLeftRadius={8}
              borderTopRightRadius={8}
              borderBottomRightRadius={8}>
              <Text fontFamily="bold" fontSize={6} color="white">
                {t(`Menu.items.${label}`)}
              </Text>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default Item;
