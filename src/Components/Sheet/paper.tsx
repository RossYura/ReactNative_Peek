import React from 'react';

import Svg, {Line, Path} from 'react-native-svg';

const paperStyles = {
  shadowColor: '#0066BF',
  shadowOffset: {width: 2, height: 2},
  shadowRadius: 15,
  shadowOpacity: 1,
};

const Paper = () => {
  return (
    <Svg viewBox="0 0 140 260" style={paperStyles}>
      <Path
        d="
        M 0,5
        h 1
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 2
        c 1,4 7,4 8,0
        h 1
        v 22
        c -4,1 -4,7 0,8
        v 160
        h -1
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -2
        c -1,-4 -7,-4 -8,0
        h -1
        v -160
        c 4,-1 4,-7, 0,-8
        z
        "
        stroke="white"
        fill="white"
        strokeWidth="1"
      />
      <Line y="31" x1="10" x2="131" stroke="#E6EBF6" strokeDasharray="2" />
    </Svg>
  );
};

export default Paper;
