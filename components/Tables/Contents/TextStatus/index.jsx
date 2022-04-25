import classNames from '@/helpers/classNames';

const TextStatus = ({ value }) => {
  return (
    <p
      className={classNames(
        value.includes('Accepted') ? 'text-success-500' : 'text-danger-500',
        'text-md-4 font-medium resize-none line-clamp-2'
      )}
    >
      {value}
    </p>
  );
};

export default TextStatus;
