import dayjs from 'dayjs';
import React, { useState } from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = ({
  name,
  single,
  handleSelectFilter = () => {},
  handleSelectDate = () => {},
  selectedDate = '',
}) => {
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

  return single ? (
    <SingleDatePicker
      date={selectedDate}
      numberOfMonths={1}
      onDateChange={(date) => handleSelectDate(date)}
      id={name}
      focused={focusedInput}
      showClearDates
      showDefaultInputIcon
      onFocusChange={({ focused }) => setFocusedInput(focused)}
      // displayFormat="YYYY-MM-DD"
    />
  ) : (
    <DateRangePicker
      showDefaultInputIcon
      showClearDates
      reopenPickerOnClearDates
      startDate={startDate}
      startDateId={name}
      endDate={endDate}
      isOutsideRange={() => false}
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
    />
  );
};
export default DatePicker;
