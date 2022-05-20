import getOneWeek from '@/helpers/getOneWeek';
import moment from 'moment';
import DateItem from './DateItem';

const DateList = ({ selectedDate, handleSelectDate }) => {
  return (
    <div className="flex flex-1 w-full gap-2">
      {getOneWeek().map((item) => (
        <DateItem
          handleSelectDate={() => handleSelectDate(item.utc)}
          selected={
            moment(item.utc).format('YYYY-MM-DD') ===
            moment(selectedDate).format('YYYY-MM-DD')
          }
          key={item.id}
          dateTitle={item.date}
          dayTitle={item.day}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
};

export default DateList;
