import React from 'react';
import {CalendarList, DateObject} from 'react-native-calendars';
import moment from 'moment';

export interface CalendarProps {
  date: Date;
  minDate: string;
  maxDate: string;
  onDayPress(date: DateObject): void;
}

const Calendar = ({onDayPress, date, minDate, maxDate}: CalendarProps) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');

  return (
    <CalendarList
      firstDay={1}
      hideArrows
      current={formattedDate}
      markedDates={{
        [formattedDate]: {selected: true, marked: true},
      }}
      onDayPress={onDayPress}
      minDate={minDate}
      maxDate={maxDate}
      theme={{
        calendarBackground: '#1E73BE',
        selectedDayBackgroundColor: 'white',
        selectedDayTextColor: '#1E73BE',
        dayTextColor: 'white',
        todayTextColor: '#FCD33A',
        monthTextColor: 'white',
        textSectionTitleColor: '#73A9D8',
        textDayFontFamily: 'CircularStd-Book',
        textMonthFontFamily: 'CircularStd-Book',
        textDayHeaderFontFamily: 'CircularStd-Book',
        textDayFontWeight: '400',
        textMonthFontWeight: '400',
        textDayHeaderFontWeight: '400',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        textDisabledColor: 'rgba(255, 255, 255, 0.3)',
      }}
    />
  );
};

export default Calendar;
