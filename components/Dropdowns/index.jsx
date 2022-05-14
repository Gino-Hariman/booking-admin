import React, { useState } from 'react';
import ChevronUp from '@/icons/Outline/Chevron Up.svg';
import ChevronDown from '@/icons/Outline/Chevron Down.svg';
import classNames from '@/helpers/classNames';

const Dropdowns = ({
  idItem,
  valueItem,
  Icon,
  placeholder,
  datas,
  rounded = false,
  handleSelectFilter,
  loading = true,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setOpen(false);
    handleSelectFilter(idItem, item[idItem]);
    setSelected(item[valueItem]);
  };

  return (
    <div>
      <div className="w-full box-border relative h-[56px] min-w-[200px]">
        <button
          onClick={handleClick}
          // tabIndex="0"
          className={classNames(
            rounded ? 'rounded-full' : 'rounded-2',
            'flex w-full justify-between items-center px-4 py-4 bg-white border-2  h-full border-shade-BD'
          )}
        >
          {Icon && <Icon className="w-6" fill="#696E76" />}

          <p className=" ml-2 text-gray-700 text-sm">
            {selected ? selected : placeholder}
          </p>
          <div className=" flex justify-center">
            {open ? (
              <ChevronDown width={20} height={20} />
            ) : (
              <ChevronUp width={20} height={20} />
            )}
          </div>
        </button>
        {open && (
          <ul
            // tabIndex="0"
            className="absolute z-40 shadow-md w-full overflow-hidden mt-2 menu text-gray-700 bg-shade-FG rounded-3 "
          >
            {loading ? (
              <p>laoding...</p>
            ) : (
              datas.map((item) => (
                <li
                  className="hover:bg-gray-300 cursor-pointer py-4 px-6"
                  onClick={() => handleSelect(item)}
                  key={item[idItem]}
                >
                  <a>{item[valueItem]}</a>
                </li>
              ))
            )}

            {/* {datas.map((item) => (
              <li
                className="hover:bg-gray-300 cursor-pointer py-4 px-6"
                onClick={() => handleSelect(item)}
                key={item[idItem]}
              >
                <a>{item[valueItem]}</a>
              </li>
            ))} */}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
