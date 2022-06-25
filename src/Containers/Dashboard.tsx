import React from 'react';
import Dashboard from '../Screens/Dashboard';
import {MainStackProps} from '../Navigation/types';
import {useSelector} from 'react-redux';
import {
  getAccounts,
  getActiveAccount,
  selectDashboard,
  selectNewUserModalHidden,
} from '../Redux/selectors';
import moment from 'moment';
import {useTranslation} from 'react-i18next';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const DashboardContainer = ({navigation}: MainStackProps<'Dashboard'>) => {
  const {t} = useTranslation();
  const sheets = useSelector(selectDashboard);
  const newUserModalHidden = useSelector(selectNewUserModalHidden);
  const hideNewUserModal = useDispatchActions(actions.hideNewUserModal);
  const accounts = useSelector(getAccounts);
  const activeAccount = useSelector(getActiveAccount);

  const onButtonPress = () => {
    const now = moment();
    const month = now.get('month');
    const year = now.get('year');

    navigation.navigate('Amount', {type: 'flexcost', month, year});
  };

  const menuBtnPress = () => {
    if (accounts.length > 0) {
      navigation.navigate('AccountSettings', {
        accountId: activeAccount?.id || '',
      });
    } else {
      navigation.navigate('AccountSettings', {accountId: undefined});
    }
  };

  return (
    <Dashboard
      newUserModalHidden={newUserModalHidden}
      newUserModal={{
        title: t('NewUserModal.title'),
        subtitle: t('NewUserModal.subtitle'),
        onIconPress: hideNewUserModal,
      }}
      onMenuBtnPress={menuBtnPress}
      onInfoBtnPress={() => navigation.navigate('FAQ')}
      onBtnPress={onButtonPress}
      sheets={sheets}
      onItemPress={(item) => navigation.navigate('EntryList', item)}
    />
  );
};

export default DashboardContainer;
