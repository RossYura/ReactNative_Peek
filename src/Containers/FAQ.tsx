import React from 'react';
import FAQ from '../Screens/FAQ';
import {MainStackProps} from '../Navigation/types';
import {useTranslation} from 'react-i18next';
import {useQuery} from 'react-query';
import {getFAQ} from '../API';

const FAQContainer = ({navigation}: MainStackProps<'FAQ'>) => {
  const {t} = useTranslation();
  const {data, isFetching} = useQuery('test', getFAQ);

  return (
    <FAQ
      title={t('FAQ.title')}
      faq={data}
      isFetching={isFetching}
      onBackBtnPress={navigation.goBack}
      onItemPress={({title, body}) =>
        navigation.navigate('FAQDetails', {title, body})
      }
    />
  );
};

export default FAQContainer;
