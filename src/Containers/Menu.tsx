import React from 'react';
import Menu, {MenuItem} from '../Screens/Menu';
import {MainStackProps} from '../Navigation/types';

const items: MenuItem[] = [
  {
    label: 'settings',
    route: 'Settings',
  },
  {
    label: 'privacy',
    route: 'Agreements',
    params: {type: 'privacy'},
  },
  {
    label: 'imprint',
    route: 'Agreements',
    params: {type: 'imprint'},
  },
];

const MenuContainer = ({navigation}: MainStackProps<'Menu'>) => {
  const onItemPress = (item: MenuItem) => {
    if (item.route) {
      navigation.navigate(item.route, item.params);
    }
  };
  return (
    <Menu
      title=""
      items={items}
      onItemPress={onItemPress}
      onCloseBtnPress={navigation.goBack}
    />
  );
};

export default MenuContainer;
