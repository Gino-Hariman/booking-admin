import React, { useState } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = () => {
  const [date, setDate] = useState();
  const [focused, setFocused] = useState();

  return (
    <SingleDatePicker
      placeholder="27 Jan 2022"
      date={date}
      onDateChange={(date) => setDate(date)}
      focused={focused}
      onFocusChange={({ focused }) => setFocused(focused)}
      id="date"
      showDefaultInputIcon
    />
  );
};
export default DatePicker;
