import React from 'react';

import Text from '../Text';

interface PadNumberProps {
  number: string;
  active: boolean;
}

const PadNumber = ({number, active}: PadNumberProps) => {
  return (
    <Text
      fontFamily="medium"
      fontSize={36}
      color={active ? '#107BD9' : '#54627D'}>
      {number}
    </Text>
  );
};

export default PadNumber;
