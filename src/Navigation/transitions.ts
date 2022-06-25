import {
  TransitionPreset,
  TransitionSpec,
} from '@react-navigation/stack/lib/typescript/src/types';
import {Easing} from 'react-native';

const transition: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  },
};

export const transitionSpec: TransitionPreset['transitionSpec'] = {
  open: transition,
  close: transition,
};
