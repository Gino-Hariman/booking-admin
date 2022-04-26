import classNames from '@/helpers/classNames';

const Chip = ({
  title,
  width = 'w-normal-chip',
  type = 'accept',
  onClick,
  isDisabled = false,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={classNames(
        type === 'accept' ? 'success-chip' : 'reject-chip',
        width,
        'chip success-chip'
      )}
    >
      <p>{title}</p>
    </button>
  );
};

export default Chip;
