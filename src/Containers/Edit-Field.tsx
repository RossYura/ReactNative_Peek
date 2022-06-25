import React from 'react';
import EditField from '../Screens/Edit-Field';
import {MainStackProps} from '../Navigation/types';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectFlexCostsLabels} from '../Redux/selectors';
import EditFieldAutoComplete, {
  EditFieldAutocompleteItem,
} from '../Screens/Edit-Field-Autocomplete';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const EditFieldContainer = ({
  navigation,
  route: {
    params: {value, type},
  },
}: MainStackProps<'EditField'>) => {
  const {t} = useTranslation();
  const labels = useSelector(selectFlexCostsLabels);
  const deleteLabel = useDispatchActions(actions.deleteFlexCostLabel);

  const onSubmitFlexCost = ({label}: EditFieldAutocompleteItem) => {
    navigation.navigate('EditEntry', {field: 'label', value: label});
  };

  if (type === 'flexcost') {
    return (
      <EditFieldAutoComplete
        initialValue={value}
        btnLabel={t('Naming.button')}
        textFieldLabel={t('Naming.label')}
        placeholder={t('Naming.placeholders.flexcost')}
        title={t('Naming.title')}
        onBtnPress={onSubmitFlexCost}
        onBackBtnPress={navigation.goBack}
        onItemPress={onSubmitFlexCost}
        onItemDelete={(item) => deleteLabel(item.label)}
        items={labels}
      />
    );
  }

  return (
    <EditField
      btnLabel={t('Naming.button')}
      textFieldLabel={t('Naming.label')}
      title={t('Naming.title')}
      placeholder={t(`Naming.placeholders.${type}`)}
      initialValue={value}
      onBtnPress={(newValue) => {
        navigation.navigate('EditEntry', {field: 'label', value: newValue});
      }}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default EditFieldContainer;
