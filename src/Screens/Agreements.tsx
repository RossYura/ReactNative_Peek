import React, {useState} from 'react';
import {ActivityIndicator, GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import WebView from 'react-native-webview';

export interface FrequencyProps {
  title: string;
  uri: string;
  onBackBtnPress(event: GestureResponderEvent): void;
}

const Agreements = ({title, onBackBtnPress, uri}: FrequencyProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <Layout
      top={
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" left={0}>
            <Button variant="transparent" onPress={onBackBtnPress}>
              <Box width={24} height={24}>
                <ChevronLeft />
              </Box>
            </Button>
          </Box>

          <Box height={32}>
            <Text color="white" fontSize={22} fontWeight={700}>
              {title}
            </Text>
          </Box>
        </Box>
      }>
      <>
        {loading && (
          <Box
            position="absolute"
            height="100%"
            width="100%"
            alignItems="center"
            zIndex={1}
            justifyContent="center">
            <ActivityIndicator size={'large'} color={'black'} />
          </Box>
        )}
        <WebView
          source={{uri}}
          onLoadEnd={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </>
    </Layout>
  );
};

export default Agreements;
