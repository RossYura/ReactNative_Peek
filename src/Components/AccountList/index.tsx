import React from 'react';
import Box, {BoxProps} from '../Box';
import {Pressable, View, FlatList, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getAccounts} from '../../Redux/selectors';
import styled, {DefaultTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Text from '../Text';
import {StyledComponent} from 'styled-components';
import User from '../../Icons/User';
import {useDispatchActions} from '../../Hooks/useDispatchActions';
import * as actions from '../../Redux/actions';
import Check from '../../Icons/Check';
import {Account} from '../../types';
import {navigate, getCurrentRoute} from '../../Navigation/Main';

const ContentWrapper = styled<
  StyledComponent<typeof View, DefaultTheme, BoxProps, never>
>(Box)({
  display: 'flex',
  flexDirection: 'row',
  height: 50,
  paddingLeft: 40,
  justifyContent: 'center',
  alignItems: 'center',
});

const AccountList: React.FC<{}> = () => {
  const accounts = useSelector(getAccounts);
  const imageStyle = {width: 40, height: 40, borderRadius: 20, marginLeft: 5};
  const toggleAccountCreator = useDispatchActions(
    actions.toggleAccountSelector,
  );
  const toggleEditingAccount = useDispatchActions(
    actions.replaceEditingAccount,
  );
  const updateAccount = useDispatchActions(actions.changeActiveAccount);

  const changeAccountActive = (account: Account) => {
    if (!account.active) {
      updateAccount(account.id);
    }
  };

  const pressAccont = (account: Account) => {
    if (getCurrentRoute() === 'AccountSettings') {
      toggleEditingAccount(account.id);
    } else {
      navigate('AccountSettings', {accountId: account.id});
    }
    toggleAccountCreator();
  };

  const addAccount = () => {
    toggleAccountCreator();
    navigate('AccountSettings', {accountId: undefined});
  };

  const renderAccounts = () => {
    const pressStyle = {flex: 1};
    return (
      <FlatList
        data={accounts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ContentWrapper>
            <Pressable style={pressStyle} onPress={() => pressAccont(item)}>
              <Box
                flex={1}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}>
                {item.imageUri && item.imageUri !== '' ? (
                  <Image source={{uri: item.imageUri}} style={imageStyle} />
                ) : (
                  <User width="50" height="50" color={'#B9B9B9'} />
                )}
                <Box flex={1} paddingLeft={30}>
                  <Text
                    fontFamily="bold"
                    fontSize={1}
                    textAlign="left"
                    color="#53617D">
                    {item.name}
                  </Text>
                </Box>
              </Box>
            </Pressable>
            <Pressable onPress={() => changeAccountActive(item)}>
              <Box width={50} height={25} marginRight={20} alignSelf={'center'}>
                {item.active && <Check width="25px" height="25px" />}
              </Box>
            </Pressable>
          </ContentWrapper>
        )}
      />
    );
  };

  return (
    <Box paddingBottom={20}>
      {renderAccounts()}
      <Pressable onPress={() => addAccount()}>
        <ContentWrapper>
          <Box
            width={40}
            justifyContent="center"
            alignItems="center"
            paddingLeft={4}>
            <Icon name={'plus'} size={24} color="#53617D" />
          </Box>
          <Box flex={1} paddingLeft={30}>
            <Text
              fontFamily="bold"
              fontSize={1}
              textAlign="left"
              color="#53617D">
              {'Add account'}
            </Text>
          </Box>
        </ContentWrapper>
      </Pressable>
    </Box>
  );
};

export default AccountList;
