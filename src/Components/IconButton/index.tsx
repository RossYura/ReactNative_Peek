import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type Props = {
  name: string;
} & TouchableOpacityProps;

const hitSlop = 16;

const IconButton = ({name, ...props}: Props) => {
  return (
    <TouchableOpacity
      hitSlop={{top: hitSlop, right: hitSlop, left: hitSlop, bottom: hitSlop}}
      {...props}>
      <Icon name={name} size={24} color="white" />
    </TouchableOpacity>
  );
};

export default IconButton;
