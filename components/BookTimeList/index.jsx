import useBookTime from '@/hooks/useBookTime';
import { useEffect } from 'react';

const { default: BookTimeItem } = require('./BookTimeItem');

const BookTimeList = ({ data, ref, name, setValue }) => {
  const { selected, handleSelect, handleSelectAllClick } = useBookTime();

  const handleSelectTime = (e, id) => {
    handleSelect(e, id);
  };

  useEffect(() => {
    if (selected.length !== 0) {
      console.log('1', name);
      setValue(name, selected.join(), {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [selected.length]);
  return (
    <div className="space-y-7">
      <BookTimeItem
        title="Select All"
        onClick={(event) => handleSelectAllClick(event, data['id_time'])}
      />

      <div class="grid grid-rows-5 grid-flow-col gap-7 ">
        {data.map((item) => {
          const isItemSelected = selected.indexOf(item.id_time) !== -1;

          return (
            <BookTimeItem
              key={item.id_time}
              ref={ref}
              isChecked={isItemSelected}
              title={item.time}
              onClick={(event) => handleSelectTime(event, item.id_time)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookTimeList;
