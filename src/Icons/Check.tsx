import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVGProps} from './typs';

const Check = ({width, height}: SVGProps) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="rgba(19, 120, 209, 1.00)"
      width={width}
      height={height}>
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Check;
