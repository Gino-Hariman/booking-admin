import { useEffect, useRef, useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';
import Modals from '../Modals';

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
  const handlesSetData = (e) => {
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
          'space-x-2 items-center'
        )}
      >
        <p className="w-full focus:outline-none resize-none text-ellipsis truncate break-words overflow-hidden">
          {data}
        </p>
        <span onClick={handleOpenModal}>
          <EditIcon className="w-6" />
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
          data={data}
          setShowModal={setShowModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          handlesSetData={handlesSetData}
        />
      )}
    </>
  );
};

export default EditTextInput;
