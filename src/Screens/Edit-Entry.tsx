import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import TextField from '../Components/TextField';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import {MainStackParams} from '../Navigation/types';

export interface EditEntryItem {
  value: string;
  label: string;
  route: keyof MainStackParams;
  routeValue: any;
}

export interface EditEntryProps {
  title: string;
  btnLabel: string;
  deleteBtnLabel: string;
  btnDisabled?: boolean;
  deleteBtnDisabled?: boolean;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(): void;
  onDeleteBtnPress(): void;
  items: EditEntryItem[];
  onItemPress(item: EditEntryItem): void;
}
const EditEntry = ({
  title,
  btnLabel,
  onBtnPress,
  btnDisabled,
  deleteBtnLabel,
  onDeleteBtnPress,
  deleteBtnDisabled,
  onBackBtnPress,
  items,
  onItemPress,
}: EditEntryProps) => {
  const handleDeleteButtonPress = () => {
    onDeleteBtnPress();
  };

  const handleButtonPress = () => {
    onBtnPress();
  };

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
        <Box width="100%" minHeight="15%" px={18} py={12}>
          <Button
            variant={btnDisabled ? 'disabled' : undefined}
            onPress={handleButtonPress}>
            {btnLabel}
          </Button>

          <Box mt={12} mb="10%">
            <Button
              variant={deleteBtnDisabled ? 'disabled' : 'transparent'}
              onPress={handleDeleteButtonPress}>
              {deleteBtnLabel}
            </Button>
          </Box>
        </Box>
      }>
      <Box display="flex" flex={1} pt={24}>
        <Box flex={1} px={32} pt="25%">
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => onItemPress(item)}>
              <Box mb={12} pointerEvents="box-only">
                <TextField
                  editable={false}
                  value={item.value}
                  label={item.label}
                />
              </Box>
            </TouchableOpacity>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default EditEntry;
