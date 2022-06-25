import React from 'react';
import ActionApproval from '../Screens/Action-Approval';
import {MainStackProps} from '../Navigation/types';
import {CommonActions} from '@react-navigation/native';
import {useDispatchActions} from '../Hooks/useDispatchActions';
import * as actions from '../Redux/actions';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {selectCurrency} from '../Redux/selectors';
import {useTranslation} from 'react-i18next';
import {getDisplayMoney} from '../utils/currencies';

const ActionApprovalContainer = ({
  route: {params},
  navigation,
}: MainStackProps<'ActionApproval'>) => {
  const {t} = useTranslation();

  const currency = useSelector(selectCurrency);
  const addCashFlow = useDispatchActions(actions.addCashFlow);
  const deleteCashFlow = useDispatchActions(actions.deleteCashFlow);

  const onBtnPress = () => {
    if (params.deleting) {
      deleteCashFlow(params.cashFlow);
    } else {
      addCashFlow(params.cashFlow);
    }

    let now;
    if (params.cashFlow.type === 'flexcost') {
      now = moment(params.cashFlow.date);
    } else {
      now = moment({month: params.cashFlow.month, year: params.cashFlow.year});
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {name: 'Dashboard'},
          {
            name: 'EntryList',
            params: {
              type: params.cashFlow.type,
              month: now.get('month'),
              year: now.get('year'),
            },
          },
        ],
      }),
    );
  };

  return (
    <ActionApproval
      deleting={params.deleting}
      btnLabel={t('ActionApproval.button')}
      title=""
      message={t(
        `ActionApproval.messages.${params.deleting ? 'deleting' : 'create'}.${
          params.cashFlow.type
        }`,
        {
          label: params.cashFlow.label,
          amount: getDisplayMoney(params.cashFlow.amount, currency),
        },
      )}
      onBtnPress={onBtnPress}
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default ActionApprovalContainer;
