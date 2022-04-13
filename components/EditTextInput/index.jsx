import { useEffect, useRef, useState } from 'react';
import Pencil from '@/icons/OEdit.svg';
import classNames from '@/helpers/classNames';

const EditTextInput = () => {
  const [data, setData] = useState('');
  const [canEdit, setCanEdit] = useState(false);
  const inputRef = useRef();
  console.log('data', data);

  useEffect(() => {
    inputRef.focus();
  }, [canEdit]);

  const handleCanEdit = () => {
    inputRef.focus();
    setCanEdit(true);
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <div
        className={classNames(
          canEdit ? 'flex' : 'hidden',
          'space-x-2 items-center'
        )}
      >
        <textarea
          rows={3}
          className="w-full focus:outline-none resize-none text-ellipsis truncate break-words overflow-hidden"
          id="notes"
          type="text"
          onChange={handleChange}
          ref={(inputEl) => (inputRef = inputEl)}
        />
        <span onClick={handleCanEdit}>
          <Pencil />
        </span>
      </div>
      <button
        className={classNames(canEdit ? 'hidden' : 'flex')}
        onClick={handleCanEdit}
      >
        Add New Booking Notes
      </button>
    </div>
  );
};

export default EditTextInput;
