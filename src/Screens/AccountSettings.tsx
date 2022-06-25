import React from 'react';
import {GestureResponderEvent, Pressable} from 'react-native';

import Layout from '../Layouts/Main';
import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Icon from 'react-native-vector-icons/Feather';
import Cross from '../Icons/Cross';
import UserAvatar from '../Components/UserAvatar';
import PropertyButton from '../Components/PropertyButton';
import {useSelector} from 'react-redux';
import {getCurrentEditAccount} from '../Redux/selectors';

export interface AccountSettingsProps {
  logoUri?: string;
  onCloseBtnPress(event: GestureResponderEvent): void;
  onAvatarPress(event: GestureResponderEvent): void;
  onSelectorPress(event: GestureResponderEvent): void;
  onAccountPress(event: GestureResponderEvent): void;
}

const AccountSettings = ({
  logoUri,
  onCloseBtnPress,
  onAvatarPress,
  onSelectorPress,
  onAccountPress,
}: AccountSettingsProps) => {
  const editingAccount = useSelector(getCurrentEditAccount);
  return (
    <Layout
      top={
        <Box
          width="100%"
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" right={0}>
            <Button variant="transparent" onPress={onCloseBtnPress}>
              <Box width={24} height={24}>
                <Cross />
              </Box>
            </Button>
          </Box>

          <Box position="absolute" left="0">
            <Pressable onPress={onSelectorPress}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                <Text
                  color="white"
                  fontSize={22}
                  fontWeight={700}
                  marginRight="20px">
                  {'Title'}
                </Text>
                <Icon name="chevron-down" size={24} color="white" />
              </Box>
            </Pressable>
          </Box>
        </Box>
      }>
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-start"
        alignItems="center">
        <UserAvatar onAvatarPress={onAvatarPress} uri={logoUri} />
      </Box>
      <Box marginTop={56}>
        <PropertyButton
          label={'AccountName'}
          content={editingAccount?.name || ''}
          onPress={onAccountPress}
        />
      </Box>
    </Layout>
  );
};

export default AccountSettings;
