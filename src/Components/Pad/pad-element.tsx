import React from 'react';

import Box from '../Box';
import {Pressable} from 'react-native';

interface PadElementProps {
  children: ({pressed}: {pressed: boolean}) => React.ReactNode;
  onPress: () => void;
}

const PadElement = ({children, onPress}: PadElementProps) => {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => {
        return (
          <Box
            width={66}
            height={66}
            borderTopLeftRadius="66px"
            borderTopRightRadius="66px"
            borderBottomRightRadius="66px"
            borderBottomLeftRadius="66px"
            alignItems="center"
            justifyContent="center"
            bg={pressed ? 'rgba(10,145,246,0.1)' : null}>
            <Box
              width={50}
              height={50}
              borderTopLeftRadius="50px"
              borderTopRightRadius="50px"
              borderBottomRightRadius="50px"
              borderBottomLeftRadius="50px"
              alignItems="center"
              justifyContent="center"
              bg={pressed ? 'rgba(10,145,246,0.1)' : null}>
              {children({pressed})}
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default PadElement;
