import React from 'react';

import Box from '../Box';
import {Pressable, useWindowDimensions} from 'react-native';
import Text from '../Text';
import {useTranslation} from 'react-i18next';

export enum Period {
  ONCE = 'once',
  '2WEEKS' = '2weeks',
  '2MONTHS' = '2months',
  MONTH = 'month',
  QUARTER = 'quarter',
  HALF_YEAR = 'halfYear',
  YEAR = 'year',
}

interface DurationProps {
  period: Period;
  onPress: () => void;
  active?: boolean;
}

const renderShadow = (active: boolean | undefined) => {
  if (active) {
    return {
      shadowColor: 'rgba(0, 72, 135, 0.79)',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    };
  }

  return null;
};

const Duration = ({period, active, onPress}: DurationProps) => {
  const {t} = useTranslation();
  const {width} = useWindowDimensions();

  return (
    <Pressable onPress={onPress}>
      <Box
        width={(width - 48 - 16) / 2}
        borderRadius={16}
        mt={16}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        height={60}
        bg={active ? 'white' : 'blue'}
        style={renderShadow(active)}>
        <Text fontFamily="bold" fontSize={16} color={active ? 'blue' : 'white'}>
          {t(`Frequencies.${period}`)}
        </Text>
      </Box>
    </Pressable>
  );
};

Duration.defaultProps = {
  active: false,
};

export default Duration;
