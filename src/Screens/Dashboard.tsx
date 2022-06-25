import React from 'react';
import {Pressable} from 'react-native';

import Box from '../Components/Box';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Layout from '../Layouts/Main';
import SheetCarousel, {Sheet} from '../Components/SheetCarousel';
import {Search} from '../types';
import IconButton from '../Components/IconButton';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components/native';

export interface DashboardProps {
  newUserModalHidden: boolean;
  newUserModal: {
    title: string;
    subtitle: string;
    onIconPress(): void;
  };
  onMenuBtnPress(): void;
  onInfoBtnPress(): void;
  onBtnPress(): void;
  sheets: Sheet[];
  onItemPress(item: Search): void;
}

const Dashboard = ({
  newUserModalHidden,
  newUserModal,
  onBtnPress,
  onMenuBtnPress,
  onInfoBtnPress,
  sheets = [],
  onItemPress,
}: DashboardProps) => {
  const theme: any = useTheme();

  return (
    <Layout
      bottom={
        <Box
          width="100%"
          minHeight="15%"
          px={18}
          py={12}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around">
          <IconButton name="settings" onPress={onMenuBtnPress} />
          <Button variant="rounded" onPress={onBtnPress}>
            <Icon name="plus" size={24} color="white" />
          </Button>
          <IconButton name="info" onPress={onInfoBtnPress} />
        </Box>
      }>
      <Box flex={1} justifyContent="center">
        {!newUserModalHidden && (
          <Pressable
            onPress={() => {
              onInfoBtnPress?.();
            }}
            style={({pressed}) => [
              {
                borderRadius: 24,
                backgroundColor: pressed ? '#2097FF' : theme.colors.modal,
                marginBottom: 16,
                marginHorizontal: 16,
              },
            ]}>
            <Box p={24}>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                mb={24}>
                <Text fontSize={16} fontWeight={'600'} color="white">
                  {newUserModal.title}
                </Text>
                <IconButton name="x" onPress={newUserModal.onIconPress} />
              </Box>
              <Text fontSize={15} color="white">
                {newUserModal.subtitle}
              </Text>
            </Box>
          </Pressable>
        )}
        <SheetCarousel entries={sheets} onItemPress={onItemPress} />
      </Box>
    </Layout>
  );
};

export default Dashboard;
