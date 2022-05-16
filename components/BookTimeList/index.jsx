import useBookTime from '@/hooks/useBookTime';
import { useEffect } from 'react';
import BookTimeItem from './BookTimeItem';

const BookTimeList = ({ data, ref, onBlur, name, setValue }) => {
  const { selected, handleSelect, handleSelectAllClick } = useBookTime();

  const handleSelectTime = (id) => {
    handleSelect(id);
  };

  useEffect(() => {
    if (selected.length > 0) {
      setValue(name, selected.join(), {
        shouldValidate: true,
      });
    }
  }, [selected.length]);

  return (
    <div className="space-y-7">
      <BookTimeItem
        title="Select All"
        onClick={(event) => handleSelectAllClick(event, data, ['id_time'])}
      />

      <div class="grid grid-rows-5 grid-flow-col gap-7 ">
        {data.map((item) => {
          const isItemSelected = selected.indexOf(item.id_time) !== -1;

          return (
            <BookTimeItem
              key={item.id_time}
              ref={ref}
              onBlur={onBlur}
              isChecked={isItemSelected}
              title={item.time}
              onClick={() => handleSelectTime(item.id_time)}
            />
          );
        })}
      </div>
      <p>asdfas</p>
    </div>
  );
};

export default BookTimeList;
