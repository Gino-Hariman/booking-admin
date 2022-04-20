import classNames from '@/helpers/classNames';

const Switch = ({ value, handleChangeStatus }) => {
  // const handleCheck = () => {
  //   return setChecked((prev) => !prev);
  // };
  console.log('value', value);

  return (
    <div class="flex items-center justify-start w-full">
      <label for="toggleB" class="flex items-center cursor-pointer">
        {/* <!-- toggle --> */}
        <div class="relative">
          {/* <!-- input --> */}
          <input
            onClick={handleChangeStatus}
            type="checkbox"
            id="toggleB"
            class="sr-only"
            checked={value === 'Active'}
          />
          {/* <!-- line --> */}
          <div
            class={classNames(
              value === 'Active' ? 'bg-success-500' : 'bg-gray-400',
              'block w-14 h-8 rounded-full'
            )}
          ></div>
          {/* <!-- dot --> */}
          <div class="dot bg-shade-BG absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        {/* <!-- label --> */}
        <div class="ml-3 text-gray-700 font-medium">
          {value === 'Active' ? 'Active' : 'Deactive'}
        </div>
      </label>
    </div>
  );
};

export default Switch;
