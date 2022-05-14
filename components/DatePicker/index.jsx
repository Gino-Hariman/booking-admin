import { dateFormat } from '@/utils/dateTimeConfig';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = ({ handleSelectFilter }) => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate: sDate, endDate: eDate }) => {
    setStartDate(sDate);
    setEndDate(eDate);
    console.log('sa', sDate, eDate);
    if (Boolean(sDate) && Boolean(eDate)) {
      handleSelectFilter('start_date', dayjs(sDate).format(dateFormat));
      handleSelectFilter('end_date', dayjs(eDate).format(dateFormat));
    }
  };

  // console.log('startDate', dayjs(startDate).format(dateFormat));
  // console.log('endDate', dayjs(endDate).format(dateFormat));

  return (
    <DateRangePicker
      showDefaultInputIcon
      showClearDates
      reopenPickerOnClearDates
      id="date"
      startDate={startDate}
      startDateId="tata-start-date"
      endDate={endDate}
      endDateId="tata-end-date"
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
    />
  );
};
export default DatePicker;
