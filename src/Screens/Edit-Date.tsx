import React, {useState} from 'react';
import {GestureResponderEvent} from 'react-native';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import Calendar from '../Components/Calendar';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import {DateObject} from 'react-native-calendars';

export interface EditDateProps {
  title: string;
  minDate: string;
  maxDate: string;
  onBackBtnPress(event: GestureResponderEvent): void;
  onDayPress(date: Date): void;
  initialDate: Date;
}

const EditDate = ({
  title,
  onBackBtnPress,
  onDayPress,
  initialDate,
  minDate,
  maxDate,
}: EditDateProps) => {
  const [date, setDate] = useState<Date>(initialDate);

  const handleDayPress = (nextDate: DateObject) => {
    setDate(new Date(nextDate.timestamp));
    onDayPress(new Date(nextDate.timestamp));
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
      }>
      <Box display="flex" flex={1} pt={24}>
        <Box flex={1}>
          <Box
            borderBottomColor="rgba(15, 91, 197, 1)"
            borderBottomWidth="1px"
          />

          <Calendar
            date={date}
            onDayPress={handleDayPress}
            minDate={minDate}
            maxDate={maxDate}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default EditDate;
