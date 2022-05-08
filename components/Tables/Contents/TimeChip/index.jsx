import ChipItem from './ChipItem';

const TimeChip = ({ value, column, row }) => {
  console.log('value', value);
  return (
    <div className="grid grid-cols-time-chip gap-3 auto-rows-time-chip">
      {value?.map((item) => (
        <ChipItem title={item} />
      ))}
    </div>
  );
};

export default TimeChip;
