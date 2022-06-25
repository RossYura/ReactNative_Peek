import Box from '../../Components/Box';
import Text from '../../Components/Text';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getDisplayDate} from '../../utils/dates';
import {CashFlowType, Search} from '../../types';
import {useTranslation} from 'react-i18next';

export interface SheetItem {
  type: CashFlowType;
  value: string;
}

export interface SlideProps {
  items: SheetItem[];
  total: string;
  month: number;
  year: number;
  height?: number;
  width: number;
  space: number;
  onItemPress(item: Search): void;
}

const Separator = () => (
  <Box width="100%" flexDirection="row" overflow="hidden">
    <Box flex={1} mx={20} display="flex" alignItems="center">
      <Text
        lineHeight="18px"
        textAlign="center"
        color="rgba(230, 235, 246, 1.00)"
        ellipsizeMode="clip"
        numberOfLines={1}
        fontSize="18px">
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - -
      </Text>
    </Box>
  </Box>
);

const Slide = ({
  items,
  total,
  month,
  year,
  height,
  width,
  space,
  onItemPress,
}: SlideProps) => {
  const {t} = useTranslation();
  return (
    <Box
      paddingBottom={height ? 0 : 20}
      borderRadius={20}
      position="relative"
      width={width}
      mr={space}
      bg="white"
      height={height ?? 'auto'}>
      <Box
        px={6}
        pt={6}
        pb={5}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Text fontFamily="bold" fontSize={1} color="#54627D">
          {t('Dashboard.sheetHeadline')}
        </Text>
      </Box>

      <Separator />

      <Box mt={20} mb={20} justifyContent="center" width="100%">
        <Text
          textAlign="center"
          fontSize={26}
          fontFamily="bold"
          color="#54627D">
          {getDisplayDate({month, year})}
        </Text>
      </Box>

      <Box>
        {items.map((item, index) => (
          <TouchableOpacity
            onPress={() => onItemPress({type: item.type, month, year})}
            key={index}>
            <Box
              px={12}
              key={index}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt={12}>
              <Box
                bg="rgba(232, 242, 251, 1.00)"
                borderRadius={6}
                px={4}
                minWidth={140}
                py={2}>
                <Text
                  lineHeight="28px"
                  color="rgba(84, 97, 125, 1.00)"
                  fontSize={22}
                  fontWeight="bold">
                  {t(`CashFlows.${item.type}`)}
                </Text>
              </Box>
              <Box
                mb={0}
                mx={3}
                height="100%"
                flex={1}
                alignItems="flex-end"
                overflow="hidden">
                <Box position="absolute" bottom={3}>
                  <Text
                    color="rgba(230, 235, 246, 1.00)"
                    ellipsizeMode="clip"
                    numberOfLines={1}
                    fontSize={8}>
                    • • • • • • • • • • • • • • • • • • • • • • • •
                  </Text>
                </Box>
              </Box>
              <Box maxWidth="140px">
                <Text
                  numberOfLines={1}
                  color="rgba(84, 97, 125, 1.00)"
                  fontSize={22}
                  fontWeight="bold">
                  {item.value}
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        ))}
      </Box>
      <Box width="100%" mt={30} mb={10}>
        <Separator />
      </Box>
      <Box px={6}>
        <Text
          textAlign="right"
          color="#54627D"
          numberOfLines={1}
          fontWeight="bold"
          fontSize={32}>
          {total}
        </Text>
      </Box>
    </Box>
  );
};

export default Slide;
