import classNames from '@/helpers/classNames';

const InputIcon = ({ children }) => {
  return (
    <span className={'absolute top-1/2 right-0 -translate-y-2/4'}>
      {children}
    </span>
  );
};

export default InputIcon;
