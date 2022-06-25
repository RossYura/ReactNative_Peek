import React from 'react';
import FAQDetails from '../Screens/FAQDetails';
import {MainStackProps} from '../Navigation/types';

const FAQDetailsContainer = ({
  navigation,
  route: {
    params: {title, body},
  },
}: MainStackProps<'FAQDetails'>) => {
  return (
    <FAQDetails onBackBtnPress={navigation.goBack} title={title} body={body} />
  );
};

export default FAQDetailsContainer;
