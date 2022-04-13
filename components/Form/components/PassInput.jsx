import IconButton from '@/components/IconButton';
import { useState } from 'react';
import EyeIcon from '../../../public/icons/eye.svg';
import OffEyeIcon from '../../../public/icons/off-eye.svg';
import InputIcon from './InputIcon';

const PassInput = ({ name, placeholder, label, register, errors }) => {
  const [passHidden, setPassHidden] = useState(true);

  const r = register(name);
  return (
    <div key={name} className="mt-5">
      <label className="label">{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        type={passHidden ? 'password' : 'text'}
        name={r?.name}
        onBlur={r?.onBlur}
        onChange={r?.onChange}
        ref={r?.ref}
      />

      <InputIcon>
        <IconButton onClick={() => setPassHidden(!passHidden)}>
          {passHidden ? <OffEyeIcon /> : <EyeIcon />}
        </IconButton>
      </InputIcon>

      <p>{errors && errors[name]?.message}</p>
    </div>
  );
};

export default PassInput;
