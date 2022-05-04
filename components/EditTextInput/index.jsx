import { useEffect, useRef, useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';
import Modals from '../Modals';
import BookingNotes from '../Modals/template/BookingNotes';

const EditTextInput = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [canEdit, setCanEdit] = useState(false);
  const inputRef = useRef();
  console.log('data', data);

  // useEffect(() => {
  //   inputRef.focus();
  // }, [canEdit]);

  const handleCanEdit = () => {
    // inputRef.focus();
    setCanEdit(true);
    setShowModal(true);
  };
  const onChange = (e) => {
    setData(e.target.value);
  };
  const handleOpenModal = () => {
    setCanEdit(true);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setCanEdit(false);
    setShowModal(false);
  };

  return (
    <>
      <div
        className={classNames(
          data ? 'flex' : 'hidden',
          'space-x-2 items-center justify-between'
        )}
      >
        <p className="text-gray-500 text-md-3 font-medium line-clamp-3">
          {data}
        </p>
        <span onClick={handleOpenModal}>
          <EditIcon className="w-6" fill="#AFB7C4" />
        </span>
      </div>
      <button
        className={classNames(
          canEdit || data ? 'hidden' : 'flex',
          'font-medium text-md-3 text-info-300'
        )}
        onClick={handleOpenModal}
      >
        Add New Booking Notes
      </button>
      {showModal && (
        <Modals
          // data={data}
          setShowModal={setShowModal}
          handleCloseModal={handleCloseModal}
        >
          <BookingNotes
            value={data}
            onChange={onChange}
            onSubmit={handleCloseModal}
          />
        </Modals>
      )}
    </>
  );
};

export default EditTextInput;
