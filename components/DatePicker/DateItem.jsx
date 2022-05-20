import classNames from '@/helpers/classNames';

const DateItem = ({
  dateTitle,
  dayTitle,
  disabled = false,
  selected = false,
  handleSelectDate,
}) => {
  const checkStyle = () => {
    if (disabled) return 'border-primary-50 bg-shade-FG text-primary-200';
    if (selected)
      return 'border-primary-500 bg-primary-500 text-primary-50 cursor-pointer';

    return 'text-primary-500 bg-primary-50 cursor-pointer';
  };
  return (
    <button
      disabled={disabled}
      onClick={handleSelectDate}
      className={classNames(
        checkStyle(),
        'w-[68px] h-[68px] border flex flex-col justify-center rounded-[2px] items-center'
      )}
    >
      <p className="text-md-2 font-semibold text-primary-300">{dateTitle}</p>
      <p className="text-md-4 font-semibold">{dayTitle}</p>
    </button>
  );
};

export default DateItem;
