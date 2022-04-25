import classNames from '@/helpers/classNames';

const Button = ({
  title,
  outlinedClass = 'outlined-btn',
  outlined = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        outlined ? outlinedClass : 'btn',
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
