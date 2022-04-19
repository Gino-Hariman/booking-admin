import classNames from '@/helpers/classNames';

const Button = ({ title, outlined = false, onClick }) => {
  console.log('outlined', outlined);
  return (
    <button
      className={classNames(
        outlined ? 'outlined-btn' : 'btn mt-12',
        'rounded-full self-center duration-300 text-white shadow'
      )}
      type="submit"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
