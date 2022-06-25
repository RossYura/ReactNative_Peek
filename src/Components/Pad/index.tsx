import React from 'react';

import Box from '../Box';
import PadNumber from './pad-number';
import Remove from '../../Icons/Remove';
import PadElement from './pad-element';

export enum KEY {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  ZERO = '0',
  DOUBLE_ZERO = '00',
  DEL = 'DEL',
}

export interface PadProps {
  onKeyPress(key: KEY): void;
}

const Pad = ({onKeyPress}: PadProps) => {
  return (
    <Box
      bg="white"
      borderTopLeftRadius={28}
      borderTopRightRadius={28}
      pt={25}
      pb={25}
      px={5}>
      <Box alignItems="center">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          pb={5}
          width={255}>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.ONE)}>
              {({pressed}) => <PadNumber number={KEY.ONE} active={pressed} />}
            </PadElement>
          </Box>

          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.TWO)}>
              {({pressed}) => <PadNumber number={KEY.TWO} active={pressed} />}
            </PadElement>
          </Box>

          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.THREE)}>
              {({pressed}) => <PadNumber number={KEY.THREE} active={pressed} />}
            </PadElement>
          </Box>
        </Box>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          pb={5}
          width={255}>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.FOUR)}>
              {({pressed}) => <PadNumber number={KEY.FOUR} active={pressed} />}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.FIVE)}>
              {({pressed}) => <PadNumber number={KEY.FIVE} active={pressed} />}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.SIX)}>
              {({pressed}) => <PadNumber number={KEY.SIX} active={pressed} />}
            </PadElement>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          pb={5}
          width={255}>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.SEVEN)}>
              {({pressed}) => <PadNumber number={KEY.SEVEN} active={pressed} />}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.EIGHT)}>
              {({pressed}) => <PadNumber number={KEY.EIGHT} active={pressed} />}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.NINE)}>
              {({pressed}) => <PadNumber number={KEY.NINE} active={pressed} />}
            </PadElement>
          </Box>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" width={255}>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.DOUBLE_ZERO)}>
              {({pressed}) => (
                <PadNumber number={KEY.DOUBLE_ZERO} active={pressed} />
              )}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.ZERO)}>
              {({pressed}) => <PadNumber number={KEY.ZERO} active={pressed} />}
            </PadElement>
          </Box>
          <Box alignItems="center">
            <PadElement onPress={() => onKeyPress(KEY.DEL)}>
              {({pressed}) => <Remove fill={pressed ? '#107BD9' : '#54627D'} />}
            </PadElement>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pad;
