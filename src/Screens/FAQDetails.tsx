import React from 'react';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import Text from '../Components/Text';
import Layout from '../Layouts/Main';
import {ScrollView} from 'react-native';

export interface FAQDetailsProps {
  onBackBtnPress(): void;
  title: string;
  body: string;
}

const FAQDetails = ({title, body, onBackBtnPress}: FAQDetailsProps) => {
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
        </Box>
      }>
      <ScrollView>
        <Box flex={1} px={18} py={12}>
          <Text fontSize={22} fontWeight={800} color="white" mb={12}>
            {title}
          </Text>
          <Text fontSize={18} fontWeight={700} color="white">
            {body}
          </Text>
        </Box>
      </ScrollView>
    </Layout>
  );
};

export default FAQDetails;
