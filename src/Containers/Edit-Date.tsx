import React from 'react';
import {MainStackProps} from '../Navigation/types';
import EditDate from '../Screens/Edit-Date';
import moment from 'moment';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectMinMaxDates} from '../Redux/selectors';

const EditDateContainer = ({
  navigation,
  route: {
    params: {value},
  },
}: MainStackProps<'EditDate'>) => {
  const {t} = useTranslation();
  const {min, max} = useSelector(selectMinMaxDates);
  return (
    <EditDate
      title={t('EditDate.title')}
      initialDate={moment(value).toDate()}
      onDayPress={(date) => {
        navigation.navigate('EditEntry', {
          field: 'date',
          value: moment(date).format('YYYY-MM-DD'),
        });
      }}
      onBackBtnPress={navigation.goBack}
      minDate={min}
      maxDate={max}
    />
  );
};

export default EditDateContainer;
