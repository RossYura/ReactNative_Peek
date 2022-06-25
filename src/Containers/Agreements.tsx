import React from 'react';
import Agreements from '../Screens/Agreements';
import {urlByType} from '../agreements';
import {MainStackProps} from '../Navigation/types';

const AgreementsContainer = ({
  navigation,
  route: {
    params: {type},
  },
}: MainStackProps<'Agreements'>) => {
  return (
    <Agreements
      title={''}
      uri={urlByType[type]}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default AgreementsContainer;
