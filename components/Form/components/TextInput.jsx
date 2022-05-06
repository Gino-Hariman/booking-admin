import ErrorMessage from '@/components/ErrorMessage';
import classNames from '@/helpers/classNames';

const TextInput = ({
  name,
  inputType = 'text',
  placeholder,
  label,
  register = () => {},
  errors,
}) => {
  const isError = errors && errors[name];

  const r = register(name);

  return (
    <div key={name} className="mt-5">
      <label className="label" for={name}>
        {label}
      </label>

      <input
        className={classNames(isError && 'error-input', 'input')}
        id={name}
        type={inputType}
        placeholder={placeholder}
        // value={input}
        name={r?.name}
        onBlur={r?.onBlur}
        onChange={r?.onChange}
        ref={r?.ref}
      />

      {isError && <ErrorMessage message={errors[name]?.message} />}
    </div>
  );
};

export default TextInput;
