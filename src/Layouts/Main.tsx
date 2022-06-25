import React, {ReactElement} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Box from '../Components/Box';

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
`;

// const KeyboardAwareScrollViewContainer = styled(KeyboardAwareScrollView)`
//   flex: 1;
// `;

interface MainLayoutProps {
  top?: ReactElement;
  bottom?: ReactElement;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, bottom, top}) => {
  return (
    <Box bg="navyBlue" flex={1}>
      <StatusBar
        backgroundColor="rgba(19, 120, 209, 1.00)"
        barStyle="light-content"
      />
      <SafeAreaViewContainer>
        {top && (
          <Box
            justifyContent="center"
            alignItems="center"
            px={18}
            height={64}
            width="100%">
            {top}
          </Box>
        )}
        <Box flex={1}>{children}</Box>
      </SafeAreaViewContainer>
      {bottom && <Box>{bottom}</Box>}
    </Box>
  );
};

export default MainLayout;
