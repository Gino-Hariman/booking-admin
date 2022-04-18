import classNames from '@/helpers/classNames';

const Chip = ({ title, width = 'w-normal-chip' }) => {
  return (
    <div
      className={classNames(
        title.includes('Accept') ? 'success-chip' : 'reject-chip',
        width,
        'chip success-chip'
      )}
    >
      <p>{title}</p>
    </div>
  );
};

export default Chip;
