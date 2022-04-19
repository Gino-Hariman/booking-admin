import classNames from '@/helpers/classNames';

const Chip = ({ title, width = 'w-normal-chip', type = 'accept', onClick }) => {
  return (
    <button
      onClick={() => console.log('123')}
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
