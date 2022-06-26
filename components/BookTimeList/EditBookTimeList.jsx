import useBookTime from '@/hooks/useBookTime';
import { useEffect } from 'react';
import BookTimeItem from './BookTimeItem';

const EditBookTimeList = ({ data, ref, onBlur, name, setValue }) => {
  const { selected, handleSelect, handleSelectAllClick, handleDefaultSelect } =
    useBookTime();

  const handleSelectTime = (id) => {
    handleSelect(id);
  };

  useEffect(() => {
    handleDefaultSelect(data, 'id');
  }, []);

  useEffect(() => {
    if (selected.length > 0) {
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
        isChecked={selected?.length === data?.length}
        onClick={(event) => handleSelectAllClick(event, data, ['id'])}
      />

      <div className="grid grid-rows-5 grid-flow-col gap-7 md:gap-x-20 place-content-start">
        {data?.map((item) => {
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

export default EditBookTimeList;
