import React from 'react';
import {
  FlatList,
  GestureResponderEvent,
  ListRenderItemInfo,
  SectionList,
} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import ListItem from '../Components/ListItem';
import Amount from '../Components/ListItem/amount';
import {CashFlowWithId} from '../types';
import {getAmountForCashFlow, selectCurrency} from '../Redux/selectors';
import moment from 'moment';
import {Period} from '../Components/Duration';
import {CurrencyCode, getDisplayMoney} from '../utils/currencies';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

export interface EntryListItem {
  label: string;
  amount: string;
}

export interface EntryListProps {
  title: string;
  btnLabel: string;
  headline: string;
  data?: CashFlowWithId[];
  sections?: {date: string; data: CashFlowWithId[]}[];
  totalAmount: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(event: GestureResponderEvent): void;
  onItemPress(item: CashFlowWithId): void;
}

interface SublineProps {
  item: CashFlowWithId;
  currency: CurrencyCode;
}

const Subline = ({item, currency}: SublineProps) => {
  const {t} = useTranslation();

  if (item.type !== 'flexcost' && item.frequency !== Period.MONTH) {
    return (
      <Text numberOfLines={1} color="white" fontSize={12}>{`(${getDisplayMoney(
        item.amount,
        currency,
      )} ${t(`FrequenciesEntryLabels.${item.frequency}`)})`}</Text>
    );
  }

  return null;
};

const Separator = () => <Box height={16} />;

const EntryList = ({
  btnLabel,
  title,
  headline,
  data = [],
  sections,
  totalAmount,
  onBtnPress,
  onBackBtnPress,
  onItemPress,
}: EntryListProps) => {
  const currency = useSelector(selectCurrency);

  const renderItem = ({item}: ListRenderItemInfo<CashFlowWithId>) => (
    <Box pl={4} pr={4}>
      <ListItem
        label={item.label}
        onPress={() => {
          onItemPress(item);
        }}>
        <Box alignItems="flex-end">
          <Amount amount={getAmountForCashFlow(item)} />
          <Subline item={item} currency={currency} />
        </Box>
      </ListItem>
    </Box>
  );

  const list = sections ? (
    <SectionList
      stickySectionHeadersEnabled={false}
      sections={sections}
      renderSectionHeader={({section}) => (
        <Box pl={24} pt={10} pb={10}>
          <Text color="rgba(255,255,255,0.7)" fontSize={12}>
            {moment(section.date).format('dddd, DD.MM.YYYY')}
          </Text>
        </Box>
      )}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );

  return (
    <Layout
      top={
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" left={0}>
            <Button variant="transparent" onPress={onBackBtnPress}>
              <Box width={24} height={24}>
                <ChevronLeft />
              </Box>
            </Button>
          </Box>

          <Box height={32}>
            <Text color="white" fontSize={22} fontWeight={700}>
              {title}
            </Text>
          </Box>
        </Box>
      }
      bottom={
        <Box
          bg="rgba(19, 120, 207, 1.00)"
          borderTopColor="rgba(55, 152, 237, 0.25)"
          borderTopWidth="1px">
          <Box width="100%" px={18} py={12}>
            <Text
              numberOfLines={1}
              fontSize={28}
              fontWeight="bold"
              color="white"
              textAlign="right">
              {totalAmount}
            </Text>
          </Box>

          <Box width="100%" px={18} py={12} minHeight="15%">
            <Button onPress={onBtnPress}>{btnLabel}</Button>
          </Box>
        </Box>
      }>
      <Box display="flex" flex={1} pt={24}>
        <Box mb={18}>
          <Text
            fontSize={28}
            fontWeight="bold"
            color="white"
            textAlign="center">
            {headline}
          </Text>
        </Box>
        <Box flex={1}>
          <Box
            borderBottomColor="rgba(15, 91, 197, 0.25)"
            borderBottomWidth="1px"
          />
          {list}
        </Box>
      </Box>
    </Layout>
  );
};

export default EntryList;
