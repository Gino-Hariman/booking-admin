import classNames from '@/helpers/classNames';

const Switch = ({ id, value, handleOpen }) => {
  return (
    <div class="flex items-center justify-start w-full">
      <label class="flex items-center cursor-pointer">
        {/* <!-- toggle --> */}
        <div class="relative">
          {/* <!-- input --> */}
          <input
            onClick={handleOpen}
            type="checkbox"
            class="sr-only"
            checked={value}
          />
          {/* <!-- line --> */}
          <div
            class={classNames(
              value ? 'bg-success-500' : 'bg-gray-400',
              'block w-14 h-8 rounded-full'
            )}
          />
          {/* <!-- dot --> */}
          <div class="dot bg-shade-BG absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
        </div>
        {/* <!-- label --> */}
        <div class="ml-3 text-gray-700 font-medium">
          {value ? 'Active' : 'Deactive'}
        </div>
      </label>
    </div>
  );
};

export default Switch;
