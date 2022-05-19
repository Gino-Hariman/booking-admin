import ChipItem from './ChipItem';

const TimeChip = ({ value, column, row }) => {
  const data = value?.split(',');
  console.log('value', value?.split(','));
  return (
    <div className="grid grid-cols-time-chip gap-3 auto-rows-time-chip">
      {data ? (
        data.map((item) => <ChipItem title={item} />)
      ) : (
        <p className="font-semibold text-gray-600">-</p>
      )}
    </div>
  );
};

export default TimeChip;
