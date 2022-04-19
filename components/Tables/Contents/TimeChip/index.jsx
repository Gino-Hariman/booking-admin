import ChipItem from './ChipItem';

const TimeChip = ({ value, column, row }) => {
  console.log('row1', value);
  return (
    <div className="grid grid-cols-time-chip gap-3  auto-rows-time-chip">
      {value.map((item) => (
        <ChipItem title={item.title} />
      ))}
    </div>
  );
};

export default TimeChip;
