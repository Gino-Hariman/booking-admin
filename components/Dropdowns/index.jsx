import React, { useState } from 'react';
import ChevUp from '../../public/icons/OChevronUp.svg';
import ChevDown from '../../public/icons/OChevronDown.svg';
import Location from '../../public/icons/Location.svg';

const Dropdowns = ({ Icon, placeholder, datas }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setOpen(false);
    setSelected(item);
  };

  return (
    <div className="w-dropdown">
      <button
        onClick={handleClick}
        // tabIndex="0"
        className="flex w-full justify-evenly items-center px-3 py-4 rounded-2 bg-white border-2 border-shade-BD"
      >
        {/* <Location /> */}
        <Icon />

        <p className="flex-1 ml-2 text-gray-700 text-sm">
          {selected ? selected : placeholder}
        </p>
        <div className="flex-1 flex justify-center">
          {open ? (
            <ChevDown width={20} height={20} />
          ) : (
            <ChevUp width={20} height={20} />
          )}
        </div>
      </button>
      {open && (
        <ul
          // tabIndex="0"
          className="absolute shadow-mdf w-full max-w-dropdown overflow-hidden mt-2 menu text-gray-700 bg-shade-FG rounded-3 "
        >
          {datas.map((item) => (
            <li
              className="hover:bg-gray-300 cursor-pointer py-4 px-6"
              onClick={() => handleSelect(item.title)}
              key={item.id}
            >
              <a>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdowns;
