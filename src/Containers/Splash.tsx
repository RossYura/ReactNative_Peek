import React from 'react';
import Splash from '../Screens/Splash';
import {useTranslation} from 'react-i18next';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';

const SplashContainer = () => {
  const {t} = useTranslation();
  const updateSplashVisited = useDispatchActions(actions.updateSplashVisited);

  return (
    <Splash
      title={t('Splash.appName')}
      btnLabel={t('Splash.button')}
      onBtnPress={updateSplashVisited}
    />
  );
};

export default SplashContainer;
