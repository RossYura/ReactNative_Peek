import React, {useState} from 'react';
import EditAccount from '../Screens/EditAccount';
import {MainStackProps} from '../Navigation/types';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const EditAccountContainer = ({
  navigation,
  route: {params: account},
}: MainStackProps<'EditAccount'>) => {
  const [value, setValue] = useState(account?.name || '');
  const addUpdateAccount = useDispatchActions(actions.addOrUpdateAccount);

  const save = () => {
    addUpdateAccount({...account, name: value});
    navigation.goBack();
  };

  return (
    <EditAccount
      value={value}
      title={'Add Account'}
      onBackBtnPress={() => navigation.goBack()}
      onBtnPress={() => save()}
      onChangeText={(text) => setValue(text)}
      btnLabel={'Save'}
    />
  );
};

export default EditAccountContainer;
