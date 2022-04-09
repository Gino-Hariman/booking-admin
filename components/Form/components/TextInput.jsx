import { Controller, useController } from 'react-hook-form';
import InputIcon from './InputIcon';

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
      <label className="label" for="password">
        {label}
      </label>

      <input
        id="password"
        type={inputType}
        placeholder={placeholder}
        // value={input}
        name={r?.name}
        onBlur={r?.onBlur}
        onChange={r?.onChange}
        ref={r?.ref}
      />

      {isError && <p>{errors[name]?.message}</p>}
    </div>
  );
};

export default TextInput;
