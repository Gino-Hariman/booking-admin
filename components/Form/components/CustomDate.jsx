import DatePicker from '@/components/DatePicker';
import DateList from '@/components/DatePicker/DayList';
import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from 'react';

const CustomDateField = ({ r, name, placeholder, setValue }) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().add(1, 'day').format('ddd') === 'Sun'
      ? moment().add(2, 'day')
      : moment().add(1, 'day')
  );

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setValue(name, dayjs(date).format('YYYY-MM-DD'), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="flex items-center flex-wrap">
      <DateList
        selectedDate={selectedDate}
        handleSelectDate={handleSelectDate}
      />
      <DatePicker
        selectedDate={selectedDate}
        single
        placeholder={placeholder}
        name={name}
        ref={r}
        handleSelectDate={handleSelectDate}
      />
    </div>
  );
};

export default CustomDateField;
