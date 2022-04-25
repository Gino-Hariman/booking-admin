import useBookTime from '@/hooks/useBookTime';

const { default: BookTimeItem } = require('./BookTimeItem');

const BookTimeList = ({ data }) => {
  const { selected, handleSelect, handleSelectAllClick } = useBookTime();

  console.log('selected', selected);
  return (
    <div className="space-y-7">
      <BookTimeItem
        title="Select All"
        onClick={(event) => handleSelectAllClick(event, data, 'id')}
      />

      <div class="grid grid-rows-5 grid-flow-col gap-7 ">
        {data.map((item) => {
          const isItemSelected = selected.indexOf(item.id) !== -1;

          return (
            <BookTimeItem
              isChecked={isItemSelected}
              title={item.time}
              onClick={(event) => handleSelect(event, item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookTimeList;
