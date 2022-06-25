import React from 'react';
import {MainStackProps} from '../Navigation/types';
import EditFieldAutoComplete, {
  EditFieldAutocompleteItem,
} from '../Screens/Edit-Field-Autocomplete';
import {useSelector} from 'react-redux';
import {selectFlexCostsLabels} from '../Redux/selectors';
import moment from 'moment';
import {useTranslation} from 'react-i18next';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const EditFieldAutocompleteContainer = ({
  route: {
    params: {amount, month, year},
  },
  navigation,
}: MainStackProps<'EditFieldAutocomplete'>) => {
  const {t} = useTranslation();
  const labels = useSelector(selectFlexCostsLabels);
  const deleteLabel = useDispatchActions(actions.deleteFlexCostLabel);

  const onSubmit = ({label}: EditFieldAutocompleteItem) => {
    const date = moment();
    date.set('month', month);
    date.set('year', year);

    navigation.navigate('ActionApproval', {
      cashFlow: {
        label,
        amount,
        date: date.format('YYYY-MM-DD'),
        type: 'flexcost',
      },
    });
  };

  return (
    <EditFieldAutoComplete
      btnLabel={t('Naming.button')}
      textFieldLabel={t('Naming.label')}
      placeholder={t('Naming.placeholders.flexcost')}
      title={t('Naming.title')}
      onBtnPress={onSubmit}
      onBackBtnPress={navigation.goBack}
      onItemPress={onSubmit}
      onItemDelete={(item) => deleteLabel(item.label)}
      items={labels}
    />
  );
};

export default EditFieldAutocompleteContainer;
