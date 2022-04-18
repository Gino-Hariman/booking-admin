import classNames from '@/helpers/classNames';

const Chip = ({ title, width = 'w-normal-chip', type = 'accept' }) => {
  return (
    <div
      className={classNames(
        type === 'accept' ? 'success-chip' : 'reject-chip',
        width,
        'chip success-chip'
      )}
    >
      <p>{title}</p>
    </div>
  );
};

export default Chip;
