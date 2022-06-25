import React from 'react';

import Box from '../Box';
import Text from '../Text';
import {Pressable} from 'react-native';
// import ChevronCircleDown from '../../Icons/ChevronCircleDown';
// import ChevronCircleUp from '../../Icons/ChevronCircleUp';

interface ButtonElevatorProps {
  direction: 'up' | 'down';
  onPress: () => void;
  label: string;
}

const ButtonElevator = ({direction, onPress, label}: ButtonElevatorProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        alignItems="center"
        flexDirection={direction === 'down' ? 'row-reverse' : 'row'}>
        <Box ml={direction === 'down' ? 4 : 0} mr={direction === 'up' ? 4 : 0}>
          <Text fontSize={1} fontFamily="bold" color="white">
            {label}
          </Text>
        </Box>
        {/* <Box>
          {direction === 'down' ? <ChevronCircleDown /> : <ChevronCircleUp />}
        </Box> */}
      </Box>
    </Pressable>
  );
};

ButtonElevator.defaultProps = {
  direction: 'down',
};

export default ButtonElevator;
