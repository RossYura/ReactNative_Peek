import React, {useEffect, useState} from 'react';
import EditEntry, {EditEntryItem} from '../Screens/Edit-Entry';
import {MainStackProps} from '../Navigation/types';
import {getDisplayMoney} from '../utils/currencies';
import {useSelector} from 'react-redux';
import {selectCurrency} from '../Redux/selectors';
import moment from 'moment';
import {useTranslation} from 'react-i18next';
import {CashFlowWithId} from '../types';
import {getDateFromCashFlow} from '../utils/dates';
import * as actions from '../Redux/actions';
import {useDispatchActions} from '../Hooks/useDispatchActions';

const EditEntryContainer = ({
  navigation,
  route: {params},
}: MainStackProps<'EditEntry'>) => {
  const {t} = useTranslation();
  const currency = useSelector(selectCurrency);
  const updateCashFlow = useDispatchActions(actions.updateCashFlow);

  const [cashFlow, setCashFlow] = useState<CashFlowWithId>(
    params.cashFlow as CashFlowWithId,
  );

  useEffect(() => {
    if (params.field) {
      setCashFlow((prev) => ({...prev, [params.field]: params.value}));
    }
  }, [params.field, params.value]);

  const onItemPress = (item: EditEntryItem) => {
    navigation.navigate(item.route, {
      value: item.routeValue,
      type: item.route === 'EditField' ? cashFlow.type : undefined,
      periods: cashFlow.type,
    });
  };

  const items: EditEntryItem[] = [
    {
      label: t('EditEntry.fields.label'),
      value: cashFlow.label,
      route: 'EditField',
      routeValue: cashFlow.label,
    },
    cashFlow.type === 'flexcost'
      ? {
          label: t('EditEntry.fields.date'),
          value: moment(cashFlow.date).format('DD.MM.YYYY'),
          route: 'EditDate',
          routeValue: cashFlow.date,
        }
      : {
          label: t('EditEntry.fields.frequency'),
          value: t(`Frequencies.${cashFlow.frequency}`),
          route: 'Frequency',
          routeValue: cashFlow.frequency,
        },
    {
      label: t('EditEntry.fields.amount'),
      value: getDisplayMoney(cashFlow.amount, currency),
      route: 'Amount',
      routeValue: cashFlow.amount,
    },
  ];

  const onSave = () => {
    const prevDate = getDateFromCashFlow(params.cashFlow as CashFlowWithId);
    updateCashFlow({
      prevDate,
      cashFlow,
      prevLabel: (params.cashFlow as CashFlowWithId).label,
    });
    navigation.goBack();
  };

  return (
    <EditEntry
      items={items}
      btnLabel={t('EditEntry.buttons.save')}
      deleteBtnLabel={t('EditEntry.buttons.delete')}
      btnDisabled={cashFlow === params.cashFlow}
      title={t(`EditEntry.titles.${cashFlow.type}`)}
      onBtnPress={onSave}
      onItemPress={onItemPress}
      onDeleteBtnPress={() =>
        navigation.navigate('ActionApproval', {cashFlow, deleting: true})
      }
      onBackBtnPress={navigation.goBack}
    />
  );
};

export default EditEntryContainer;
