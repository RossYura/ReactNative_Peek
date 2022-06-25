import React from 'react';
import ReactNativeLinearGradient from 'react-native-linear-gradient';

const LinearGradient: React.FC = ({children}) => {
  const colors = ['rgba(30, 116, 191, 0)', 'rgba(12, 73, 190, 0.6)'];
  const style = {
    height: 215,
    width: '100%',
  };

  return (
    <ReactNativeLinearGradient
      colors={colors}
      pointerEvents="none"
      style={style}>
      {children}
    </ReactNativeLinearGradient>
  );
};

export default LinearGradient;
