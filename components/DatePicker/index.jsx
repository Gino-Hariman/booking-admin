import dayjs from 'dayjs';
import React, { useState } from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = ({ handleSelectFilter }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate: sDate, endDate: eDate }) => {
    setStartDate(sDate);
    setEndDate(eDate);

    if (!sDate && !eDate) {
      handleSelectFilter('start_date', undefined);
      handleSelectFilter('end_date', undefined);
    }
    if (Boolean(sDate)) {
      handleSelectFilter('start_date', dayjs(sDate).format('YYYY-MM-DD'));
    }
    if (Boolean(eDate)) {
      handleSelectFilter('end_date', dayjs(eDate).format('YYYY-MM-DD'));
    }
  };

  // console.log('startDate', dayjs(startDate).format('YYYY-MM-DD'));
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
