import classNames from '@/helpers/classNames';

const ButtonWithIcon = ({
  title,
  Icon,
  position = 'left',
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      className="btn rounded-full w-full flex justify-between mt-12 self-center duration-300 text-white shadow"
      type="submit"
      onClick={onClick}
      disabled={isDisabled}
    >
      <p className={classNames(position === 'left' && 'order-last')}>{title}</p>

      <Icon className="w-6" />
    </button>
  );
};

export default ButtonWithIcon;
