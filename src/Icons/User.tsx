import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGProps} from './typs';
interface UserProps extends SVGProps {
  color: string;
}

const User = ({width, height, color}: UserProps) => {
  return (
    <Svg viewBox="0 0 20 20" fill={color} width={width} height={height}>
      <Path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default User;
