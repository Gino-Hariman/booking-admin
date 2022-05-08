import classNames from '@/helpers/classNames';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const Counter = ({ name, ref, getValues, setValue }) => {
  const [num, setNum] = useState(0);
  const checkIsDisabled = () => {
    return getValues(name) === 1;
  };

  const subtract = () => {
    if (checkIsDisabled()) return;
    setValue(name, getValues(name) - 1, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const add = () => {
    setValue(name, getValues(name) + 1, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onChange = (e) => {
    if (e.target.value < 1)
      return setValue(name, 1, {
        shouldValidate: true,
        shouldDirty: true,
      });
    setValue(name, e.target.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div ref={ref} className="flex md:flex-row flex-col items-center space-x-2">
      <MinusCircleIcon
        onClick={subtract}
        className={classNames(
          checkIsDisabled() ? 'text-gray-400' : 'text-success-500',
          'w-6 h-6'
        )}
      />
      <input
        // className={classNames(isError && 'error-input', 'input')}
        min={1}
        className="w-[44px] border-b text-lg-1 font-semibold text-gray-700 border-shade-40 outline-none text-center"
        id={name}
        type="text"
        value={getValues(name)}
        name={name}
        onBlur={ref?.onBlur}
        onChange={onChange}
        ref={ref?.ref}
      />
      <PlusCircleIcon onClick={add} className="w-6 h-6 text-success-500" />
    </div>
  );
};

export default Counter;
