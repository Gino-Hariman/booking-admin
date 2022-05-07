import { useRef, useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';
import Modals from '../Modals';
import BookingNotes from '../Modals/template/BookingNotes';
import { Actions } from '../ListData/components';
import usePutQuery from '@/hooks/usePutQuery';
import { useQueryClient } from 'react-query';
import useToast from '@/hooks/useToast';

const EditTextInput = ({ present, note, orderID }) => {
  const queryClient = useQueryClient();
  const { notify } = useToast();
  const [isPresent, setIsPresent] = useState(present);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState(note === 'undefined' ? '' : note);
  const editRef = useRef(false);
  const presentMutation = usePutQuery('/book/present');

  const handleEditNote = () => {
    setShowModal(true);
    editRef.current = true;
  };
  const onChange = (e) => {
    setNotes(e.target.value);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptStudent = () => {
    setIsPresent(1);
    presentMutation.mutate(
      {
        order_id: orderID,
        present: 1,
      },
      {
        onSuccess: (res) => {
          console.log('res mutate', res);

          notify('success', `Edit Note ${res}`);
        },
        onError: (res) => {
          console.log('res', res);
          notify('error', 'Edit Not Failed!');
        },
        onSettled: () => {
          queryClient.invalidateQueries(['ongoing', 'table']);
        },
      }
    );
  };

  const handleDeclineStudent = () => {
    setIsPresent(0);
    setShowModal(true);
  };

  const handleSubmitModal = () => {
    console.log('234', editRef.current, present, isPresent);
    presentMutation.mutate(
      {
        order_id: orderID,
        note: notes,
        present: editRef.current ? present : isPresent,
      },
      {
        onSuccess: (res) => {
          console.log('res mutate', res);

          notify('success', `Edit Note ${res}`);
        },
        onError: (res) => {
          console.log('res', res);
          notify('error', 'Edit Not Failed!');
        },
        onSettled: () => {
          queryClient.invalidateQueries(['ongoing', 'table']);
        },
      }
    );
    setShowModal(false);
  };

  if (isPresent === undefined && present === null)
    return (
      <>
        <Actions
          handleAcceptStudent={handleAcceptStudent}
          handleDeclineStudent={handleDeclineStudent}
        />
        {showModal && (
          <Modals
            // notes={notes}
            setShowModal={setShowModal}
            handleCloseModal={handleCloseModal}
          >
            <BookingNotes
              value={notes}
              onChange={onChange}
              onSubmit={handleSubmitModal}
            />
          </Modals>
        )}
      </>
    );

  console.log('note', note);
  return (
    <>
      {isPresent === 0 || present === 0 ? (
        <p className="text-md-3 font-medium text-danger-600">{note}</p>
      ) : (
        <>
          <div
            className={classNames(
              note !== 'undefined' ? 'flex' : 'hidden',
              'space-x-2 items-center justify-between'
            )}
          >
            <p className="text-gray-500 text-md-3 font-medium line-clamp-3">
              {note}
            </p>
            <span onClick={handleEditNote}>
              <EditIcon className="w-6" fill="#AFB7C4" />
            </span>
          </div>
          <button
            className={classNames(
              note !== 'undefined' ? 'hidden' : 'flex',
              'font-medium text-md-3 text-info-300'
            )}
            onClick={handleOpenModal}
          >
            Add New Booking Notes
          </button>
        </>
      )}

      {showModal && (
        <Modals
          // notes={notes}
          setShowModal={setShowModal}
          handleCloseModal={handleCloseModal}
        >
          <BookingNotes
            value={notes}
            onChange={onChange}
            onSubmit={handleSubmitModal}
          />
        </Modals>
      )}
    </>
  );
};

export default EditTextInput;
