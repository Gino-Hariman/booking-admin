import useBookTime from '@/hooks/useBookTime';
import { useEffect } from 'react';
import BookTimeItem from './BookTimeItem';

const CustomTimeList = ({ data, ref, onBlur, name, setValue }) => {
  const { selected, handleSelect, handleSelectAllClick } = useBookTime();

  const handleSelectTime = (id) => {
    handleSelect(id);
  };

  useEffect(() => {
    if (selected.length > 0) {
      setValue(name, selected.join(), {
        shouldValidate: true,
        shoudDirty: true,
      });
    }
  }, [selected.length]);

  return (
    <div className="space-y-7">
      <BookTimeItem
        title="Select All"
        onClick={(event) => handleSelectAllClick(event, data, ['id'])}
      />

      <div className="grid grid-rows-5 grid-flow-col gap-7 md:gap-x-20 place-content-start">
        {data.map((item) => {
          const isItemSelected = selected.indexOf(item.id) !== -1;

          return (
            <BookTimeItem
              key={item.id}
              ref={ref}
              onBlur={onBlur}
              isChecked={isItemSelected}
              title={item.time}
              onClick={() => handleSelectTime(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomTimeList;
