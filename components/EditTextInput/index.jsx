import { useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';
import Modals from '../Modals';
import BookingNotes from '../Modals/template/BookingNotes';
import { Actions } from '../ListData/components';

const EditTextInput = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [isDecline, setIsDecline] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [canEdit, setCanEdit] = useState(false);
  console.log('data', data);

  const handleCanEdit = () => {
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
    // setIsAccept(undefined);
  };

  const handleAcceptStudent = () => {
    // setCanEdit(true);
    setIsAccept(1);
  };

  const handleDeclineStudent = () => {};

  if (isAccept === undefined)
    return (
      <>
        <Actions
          handleAcceptStudent={handleAcceptStudent}
          handleOpenModal={handleOpenModal}
          setIsAccept={setIsAccept}
        />
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
