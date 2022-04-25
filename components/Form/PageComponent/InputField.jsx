import classNames from '@/helpers/classNames';
import FormField, { FormLabel } from './FormField';

const InputField = ({
  title,
  register = () => {},
  name,
  errors,
  placeholder,
  hasBorder,
}) => {
  const isError = errors && errors[name];

  const r = register(name);

  return (
    <FormField
      hasBorder={hasBorder}
      labelComp={<FormLabel title={title} />}
      Comp={
        <input
          className={classNames(isError && 'error-input', 'input')}
          id={name}
          type="text"
          placeholder={placeholder}
          // value={input}
          name={r?.name}
          onBlur={r?.onBlur}
          onChange={r?.onChange}
          ref={r?.ref}
        />
      }
      errorMessage={errors[name]?.message}
    />
  );
};

export default InputField;
