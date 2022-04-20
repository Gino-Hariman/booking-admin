import classNames from '@/helpers/classNames';

const TextInput = ({ title }) => {
  return (
    <p
      className={classNames(
        title.includes('Accepted') ? 'text-success-500' : 'text-danger-500',
        'text-md-4 font-medium'
      )}
    >
      {title}
    </p>
  );
};

export default TextInput;
