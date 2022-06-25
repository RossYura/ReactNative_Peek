import React from 'react';
import Wallet from '../../Icons/Wallet';
import Box from '../Box';
import Text from '../Text';

import Paper from './paper';

export interface SheetItem {
  label: string;
  value: string;
}

export interface SheetProps {
  items: SheetItem[];
  total: string;
}

const Sheet = ({items = [], total}: SheetProps) => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Box position="absolute" width="100%" height="100%">
        <Paper />
      </Box>
      <Box
        mx="10%"
        pt={32}
        px={24}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text fontFamily="bold" fontSize={1} color="#54627D">
          Monatsbilanz
        </Text>
        <Wallet />
      </Box>
      <Box mt={50} mb={20} justifyContent="center" width="100%">
        <Text
          textAlign="center"
          fontSize={26}
          fontFamily="bold"
          color="#54627D">
          November 2020
        </Text>
      </Box>

      <Box mx="10%" px={18}>
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={12}>
            <Box bg="rgba(232, 242, 251, 1.00)" borderRadius={6} px={4} py={4}>
              <Text
                color="rgba(84, 97, 125, 1.00)"
                fontSize={22}
                fontWeight="bold">
                {item.label}
              </Text>
            </Box>
            <Box mb={0} mx={12} height="100%" flex={1} alignItems="flex-end">
              <Box position="absolute" bottom={10}>
                <Text
                  color="rgba(230, 235, 246, 1.00)"
                  ellipsizeMode="clip"
                  numberOfLines={1}
                  fontSize={10}>
                  • • • • • • • • • • • • • • • • • • • • • • • •
                </Text>
              </Box>
            </Box>
            <Box>
              <Text
                color="rgba(84, 97, 125, 1.00)"
                fontSize={22}
                fontWeight="bold">
                {item.value}
              </Text>
            </Box>
          </Box>
        ))}

        <Box width="100%" mt={12}>
          <Text
            color="rgba(230, 235, 246, 1.00)"
            ellipsizeMode="clip"
            numberOfLines={1}
            fontSize={18}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - -
          </Text>
        </Box>
        <Box width="100%" mt={12}>
          <Text
            textAlign="right"
            color="#54627D"
            ellipsizeMode="clip"
            numberOfLines={1}
            fontWeight="bold"
            fontSize={32}>
            {total}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sheet;
