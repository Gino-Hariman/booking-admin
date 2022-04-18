import { useEffect, useRef, useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';

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
          onBlur={() => {
            setCanEdit(false);
          }}
          rows={3}
          className="w-full focus:outline-none resize-none text-ellipsis truncate break-words overflow-hidden"
          id="notes"
          type="text"
          onChange={handleChange}
          ref={(inputEl) => (inputRef = inputEl)}
        />
        <span onClick={handleCanEdit}>
          <EditIcon className="w-6" />
        </span>
      </div>
      <button
        className={classNames(
          canEdit ? 'hidden' : 'flex',
          'font-medium text-md-3 text-info-300'
        )}
        onClick={handleCanEdit}
      >
        Add New Booking Notes
      </button>
    </div>
  );
};

export default EditTextInput;
