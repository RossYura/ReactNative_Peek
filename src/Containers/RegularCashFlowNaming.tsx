import React from 'react';
import EditField from '../Screens/Edit-Field';
import {MainStackProps} from '../Navigation/types';
import {useTranslation} from 'react-i18next';
import {CashFlow} from '../types';

const RegularCashFlowNaming = ({
  navigation,
  route: {params},
}: MainStackProps<'RegularCashFlowNaming'>) => {
  const {t} = useTranslation();

  return (
    <EditField
      btnLabel={t('Naming.button')}
      textFieldLabel={t('Naming.label')}
      title={t('Naming.title')}
      placeholder={t(`Naming.placeholders.${params.type}`)}
      initialValue=""
      onBtnPress={(label) =>
        navigation.navigate('ActionApproval', {
          cashFlow: {...params, label} as CashFlow,
        })
      }
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default RegularCashFlowNaming;
