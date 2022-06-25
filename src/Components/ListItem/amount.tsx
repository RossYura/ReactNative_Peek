import React from 'react';

import Text from '../Text';
import {getDisplayMoney} from '../../utils/currencies';
import {useSelector} from 'react-redux';
import {selectCurrency} from '../../Redux/selectors';

interface AmountProps {
  amount: number;
}

const Amount = ({amount}: AmountProps) => {
  const currency = useSelector(selectCurrency);
  return (
    <Text color="white" fontFamily="bold" fontSize={3} numberOfLines={1}>
      {getDisplayMoney(amount, currency)}
    </Text>
  );
};

export default Amount;
