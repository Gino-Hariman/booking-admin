import { CheckIcon } from '@heroicons/react/solid';

const BookTimeItem = ({ ref, title, onBlur, isChecked, onClick }) => {
  return (
    <div className="flex relative items-center">
      <input
        ref={ref}
        checked={isChecked}
        onBlur={onBlur}
        className="absolute opacity-0 w-6 h-6 border rounded-sm bg-white  focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
        type="checkbox"
        // value=""
        onClick={onClick}
      />
      <div class="checkbox bg-shade-FG rounded-1 border-2 rounded-md border-gray-700 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-500">
        <CheckIcon className="icon hidden fill-current  w-4 h-4 text-primary-600 pointer-events-none " />
      </div>
      <label
        class="form-check-label text-md-3 font-medium text-center inline-block text-gray-700"
        for="flexCheckDefault"
      >
        {title}
      </label>
    </div>
  );
};

export default BookTimeItem;
