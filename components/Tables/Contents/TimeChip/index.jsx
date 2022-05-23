import ChipItem from './ChipItem';

const TimeChip = ({ value, column, row }) => {
  const data = value?.split(',');

  return (
    <div className="grid grid-cols-time-chip gap-3 auto-rows-time-chip">
      {data ? (
        data.map((item) => <ChipItem key={item} title={item} />)
      ) : (
        <p className="font-semibold text-gray-600">-</p>
      )}
    </div>
  );
};

export default TimeChip;
