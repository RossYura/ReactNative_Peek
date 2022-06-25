import React, {useState} from 'react';
import Amount from '../Screens/Amount';
import {MainStackProps} from '../Navigation/types';
import {KEY} from '../Components/Pad';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectCurrency} from '../Redux/selectors';
import {currencySymbols, formatMoney} from '../utils/currencies';

const AmountContainer = ({
  navigation,
  route: {params},
}: MainStackProps<'Amount'>) => {
  const {t} = useTranslation();
  const currencyCode = useSelector(selectCurrency);

  // TODO: Optimize code here
  const [value, setValue] = useState<string>(
    params.type ? '0' : `${params.value * 100}`,
  );

  const onKeyPress = (key: KEY) => {
    if (key === KEY.DEL) {
      return setValue((prev) => prev.slice(0, prev.length - 1));
    }

    setValue((prev) => {
      if ((key === KEY.DOUBLE_ZERO || key === KEY.ZERO) && !prev) {
        return prev;
      }
      return prev + key;
    });
  };

  const onSubmit = () => {
    const number = +value / 100;

    if (!number) {
      return;
    }

    if (params.type) {
      const cashFlowParams = {
        amount: number,
        month: params.month,
        year: params.year,
        type: params.type,
      };

      if (params.type === 'flexcost') {
        return navigation.navigate('EditFieldAutocomplete', cashFlowParams);
      }
      return navigation.navigate('Frequency', {
        ...cashFlowParams,
        periods: params.type,
      });
    }
    navigation.navigate('EditEntry', {
      field: 'amount',
      value: number,
    });
  };

  return (
    <Amount
      value={`${formatMoney(+value / 100)} ${currencySymbols[currencyCode]}`}
      btnLabel={t('Amount.button')}
      title={t('Amount.title')}
      onBtnPress={onSubmit}
      onBackBtnPress={navigation.goBack}
      onKeyPress={onKeyPress}
    />
  );
};

export default AmountContainer;
