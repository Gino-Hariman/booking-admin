import IconButton from '@/components/IconButton';
import { useState } from 'react';
// import EyeIcon from '../../../public/icons/eye.svg';
// import OffEyeIcon from '../../../public/icons/eye-off.svg';
import InputIcon from './InputIcon';
import { EyeOffIcon, EyeIcon } from '@heroicons/react/solid';
import ErrorMessage from '@/components/ErrorMessage';

const PassInput = ({ name, placeholder, label, register, errors }) => {
  const [passHidden, setPassHidden] = useState(true);
  const tooglePass = () => {
    setPassHidden((prev) => !prev);
  };

  const isError = errors && errors[name];
  const r = register(name);
  return (
    <div key={name} className="mt-5">
      <label className="label">{label}</label>
      <div className="relative">
        <input
          className="input w-full h-full"
          placeholder={placeholder}
          type={passHidden ? 'password' : 'text'}
          name={r?.name}
          onBlur={r?.onBlur}
          onChange={r?.onChange}
          ref={r?.ref}
        />
        <InputIcon>
          <IconButton onClick={tooglePass}>
            {passHidden ? <EyeOffIcon width={20} /> : <EyeIcon width={20} />}
          </IconButton>
        </InputIcon>
      </div>

      {isError && <ErrorMessage message={errors[name]?.message} />}
    </div>
  );
};

export default PassInput;
