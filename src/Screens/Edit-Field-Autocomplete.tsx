import React, {useState} from 'react';
import {FlatList, GestureResponderEvent, TouchableOpacity} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import TextField from '../Components/TextField';
import ActivityIndicator from '../Components/ActivityIndicator';
import ChevronLeft from '../Icons/ChevronLeft';
import Delete from '../Icons/Delete';
import Target from '../Illustrations/Target';
import Layout from '../Layouts/Main';
import ListItem from '../Components/ListItem';

export interface EditFieldAutocompleteItem {
  label: string;
}

export interface EditFieldAutocompleteProps {
  title: string;
  btnLabel: string;
  textFieldLabel: string;
  placeholder?: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onBtnPress(item: EditFieldAutocompleteItem): void;
  onItemPress(item: EditFieldAutocompleteItem): void;
  onItemDelete(item: EditFieldAutocompleteItem): void;
  initialValue?: string;
  loading?: boolean;
  items?: EditFieldAutocompleteItem[];
}

const compare = (value: string) => (item: EditFieldAutocompleteItem) =>
  item.label.toLowerCase().trim().indexOf(value.toLowerCase().trim()) >= 0;

const EditFieldAutocomplete = ({
  textFieldLabel,
  btnLabel,
  placeholder,
  title,
  onBtnPress,
  onBackBtnPress,
  initialValue,
  loading,
  items = [],
  onItemPress,
  onItemDelete,
}: EditFieldAutocompleteProps) => {
  const [value, setValue] = useState<string>(initialValue || '');

  const filteredItems = items.filter(compare(value));

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
  };

  const handlePress = () => {
    onBtnPress({label: value.trim()});
  };

  const showCreateButton =
    !loading &&
    value.length > 0 &&
    !filteredItems.some(
      (val) => val.label.toLowerCase().trim() === value.toLowerCase().trim(),
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
      }>
      <>
        {loading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            height="100%"
            width="100%">
            <Box position="absolute" opacity={0.12}>
              <Target />
            </Box>
            <ActivityIndicator />
          </Box>
        )}
        <Box display="flex" flex={1} pt={24}>
          <Box flex={1}>
            <Box px={32} pb={24}>
              <TextField
                editable={!loading}
                placeholder={placeholder}
                placeholderTextColor="white"
                defaultValue={initialValue}
                label={textFieldLabel}
                onChangeText={handleChange}
              />
            </Box>

            {showCreateButton && (
              <Box pt={12} px={12}>
                <Button onPress={handlePress}>{btnLabel}</Button>
              </Box>
            )}

            <Box
              borderBottomColor="rgba(15, 91, 197, 0.25)"
              borderBottomWidth="1px"
            />

            <FlatList
              data={filteredItems}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => (
                <Box pl={18} pr={18} mt={4} mb={4}>
                  <ListItem
                    label={item.label}
                    onPress={() => {
                      onItemPress(item);
                    }}>
                    <TouchableOpacity
                      hitSlop={{top: 16, right: 16, left: 16, bottom: 16}}
                      onPress={() => {
                        onItemDelete(item);
                      }}>
                      <Box display="flex" alignItems="flex-end">
                        <Delete />
                      </Box>
                    </TouchableOpacity>
                  </ListItem>
                </Box>
              )}
            />
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default EditFieldAutocomplete;
