import React from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import NavigationItem from '../Components/Navigation/Item';
import Cross from '../Icons/Cross';
import Layout from '../Layouts/Main';
import {MainStackParams} from '../Navigation/types';
import {AgreementType} from '../agreements';

export interface MenuItem {
  label: string;
  route?: keyof MainStackParams;
  params?: {type: AgreementType};
}

export interface MenuProps {
  title: string;
  items: MenuItem[];
  onCloseBtnPress(event: GestureResponderEvent): void;
  onItemPress(item: MenuItem): void;
}

const Menu = ({title, onItemPress, items, onCloseBtnPress}: MenuProps) => {
  return (
    <Layout
      top={
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" right={0}>
            <Button variant="transparent" onPress={onCloseBtnPress}>
              <Box width={24} height={24}>
                <Cross />
              </Box>
            </Button>
          </Box>

          <Box height={32}>
            <Text color="white" fontSize={22} fontWeight={700}>
              {title}
            </Text>
          </Box>
        </Box>
      }>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="150px"
        px={18}>
        {items.map((item, index) => (
          <Box key={index} pl={18} pr={18} width="100%">
            <NavigationItem
              label={item.label}
              onPress={() => onItemPress(item)}
            />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
