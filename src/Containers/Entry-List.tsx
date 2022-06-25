import React from 'react';
import EntryList from '../Screens/Entry-List';
import {MainStackProps} from '../Navigation/types';
import EmptyList from '../Screens/Empty-List';
import {useSelector} from 'react-redux';
import {selectCashFlowsForMonth} from '../Redux/selectors';
import {RootState} from '../Redux/store';
import moment from 'moment';
import {useTranslation} from 'react-i18next';

const EntryListContainer = ({
  navigation,
  route: {
    params: {type, year, month},
  },
}: MainStackProps<'EntryList'>) => {
  const {t} = useTranslation();

  const {total, data, sections} = useSelector((state: RootState) =>
    selectCashFlowsForMonth(state, {type, month, year}),
  );

  const onCreate = () => {
    navigation.navigate('Amount', {type, year, month});
  };

  const title = t(`CashFlows.${type}`);
  const btnLabel = t(`EntryList.createButton.${type}`);

  if (!data.length) {
    return (
      <EmptyList
        message={t(`EmptyList.message.${type}`)}
        btnLabel={btnLabel}
        title={title}
        onBtnPress={onCreate}
        onBackBtnPress={navigation.goBack}
      />
    );
  }

  return (
    <EntryList
      data={data}
      sections={sections}
      btnLabel={btnLabel}
      title={title}
      headline={moment({month, year}).format('MMMM YYYY')}
      totalAmount={total}
      onItemPress={(cashFlow) => navigation.navigate('EditEntry', {cashFlow})}
      onBtnPress={onCreate}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default EntryListContainer;
