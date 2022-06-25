import React, {useState, useEffect, useMemo} from 'react';
import {MainStackProps} from '../Navigation/types';
import AccountSettings from '../Screens/AccountSettings';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {Alert} from 'react-native';
import {
  // Asset,
  CameraOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';
import {v4 as uuidV4} from 'uuid';
import {Account} from '../types';
import {useSelector} from 'react-redux';
import {getAccounts, getCurrentEditAccount} from '../Redux/selectors';

const AccountSettingsContainer = ({
  navigation,
  route: {
    params: {accountId},
  },
}: MainStackProps<'AccountSettings'>) => {
  const accounts = useSelector(getAccounts);
  const editingAccount = useSelector(getCurrentEditAccount);
  const {showActionSheetWithOptions} = useActionSheet();
  const [logoImg, setLogoImg] = useState('');
  const toggleAccountCreator = useDispatchActions(
    actions.toggleAccountSelector,
  );
  const addUpdateAccount = useDispatchActions(actions.addOrUpdateAccount);
  const removeEditState = useDispatchActions(actions.deleteEditingAccount);

  const currentAccount = useMemo(() => {
    let emptyAccount: Account = {
      id: uuidV4(),
      imageUri: '',
      name: '',
      active: false,
      editing: true,
    };
    if (editingAccount) {
      return editingAccount;
    } else if (accountId && !editingAccount) {
      return accounts.find((one) => one.id === accountId) || emptyAccount;
    }
    return emptyAccount;
  }, [accountId, editingAccount, accounts]);

  useEffect(() => {
    return () => {
      removeEditState();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentAccount.imageUri && currentAccount.imageUri !== '') {
      setLogoImg(currentAccount.imageUri);
    }
  }, [currentAccount]);

  const onImagePickerResponse = async (response: ImagePickerResponse) => {
    if (response.didCancel) {
      return console.log('User cancelled image picker');
    } else if (response.errorCode) {
      return console.log(response.errorCode);
    } else if (!response.assets || !response.assets[0]) {
      return Alert.alert('No image was uploaded from your device.');
    }

    const image = response.assets[0];

    if (!image.uri) {
      return Alert.alert('No image was uploaded from your device.');
    }

    // setLogoImg(image.uri);
    addUpdateAccount({...currentAccount, imageUri: image.uri, editing: true});
  };

  const showImageOptions = () => {
    const options = [
      'Take Photo from Camera',
      'Select Photo from Library',
      'Cancel',
    ];
    const cancelButtonIndex = 2;
    showActionSheetWithOptions(
      {
        title: 'Select Profile Photo',
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        const optionsPicker: CameraOptions = {
          mediaType: 'photo',
          maxWidth: 640,
          maxHeight: 640,
          quality: 0.5,
        };

        switch (buttonIndex) {
          case 0:
            launchCamera(optionsPicker, onImagePickerResponse);
            break;

          case 1:
            launchImageLibrary(optionsPicker, onImagePickerResponse);
            break;
        }
      },
    );
  };

  const onShowAccountSelector = () => {
    toggleAccountCreator();
  };

  const onAccountPress = () => {
    navigation.navigate('EditAccount', {...currentAccount, editing: true});
  };

  return (
    <AccountSettings
      onCloseBtnPress={navigation.goBack}
      onAvatarPress={showImageOptions}
      onSelectorPress={onShowAccountSelector}
      onAccountPress={onAccountPress}
      logoUri={logoImg}
    />
  );
};

export default AccountSettingsContainer;
