import { useState } from 'react';
import classNames from '@/helpers/classNames';
import EditIcon from '@/icons/Fill/Edit.svg';
import Modals from '../Modals';
import BookingNotes from '../Modals/template/BookingNotes';
import { Actions } from '../ListData/components';
import usePutQuery from '@/hooks/usePutQuery';
import { useQueryClient } from 'react-query';
import useToast from '@/hooks/useToast';
import usePostQuery from '@/hooks/usePostQuery';

const EditTextInput = ({ present, note, orderID }) => {
  const queryClient = useQueryClient();
  const { notify } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState(!Boolean(note) ? '' : note);
  const presentMutation = usePutQuery('/book/present');
  const notpresentMutation = usePutQuery('/book/notpresent');

  const notePresentMutation = usePostQuery('/book/present/note');

  const handleEditNote = () => {
    setShowModal(true);
  };
  const onChange = (e) => {
    setNotes(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptStudent = () => {
    setShowModal(true);
    presentMutation.mutate(
      {
        order_id: orderID,
        present: 1,
      },
      {
        onSuccess: (res) => {
          notify('success', `Edit Note ${res}`);
        },
        onError: (res) => {
          notify('error', 'Edit Note Failed!');
        },
      }
    );
  };

  const handleDeclineStudent = () => {
    notpresentMutation.mutate(
      {
        order_id: orderID,
        note: `Student doesn’t attend `,
      },
      {
        onSuccess: (res) => {
          console.log('res', res);
          notify('success', `Successfully Reject Student`);
          queryClient.invalidateQueries(['ongoing-table']);
        },
        onError: (err) => {
          console.log('err', err);

          notify('error', 'Sorry, something went wrong');
        },
      }
    );
  };

  const handleSubmitModal = () => {
    notePresentMutation.mutate(
      {
        order_id: orderID,
        note: notes,
      },
      {
        onSuccess: (res) => {
          notify('success', `Edit Note ${res}`);
        },
        onError: (err) => {
          notify('error', 'Edit Not Failed!');
        },
        onSettled: () => {
          queryClient.invalidateQueries(['ongoing-table']);
        },
      }
    );
    setShowModal(false);
  };

  if (present === 0 && Boolean(note))
    return <p className="text-md-3 font-medium text-danger-600">{note}</p>;

  if (present === 1 && Boolean(note))
    return (
      <>
        <div
          className={classNames(
            Boolean(note) ? 'flex' : 'hidden',
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
        {showModal && (
          <Modals
            title={'Add Notes'}
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

  return (
    <>
      <Actions
        handleAcceptStudent={handleAcceptStudent}
        handleDeclineStudent={handleDeclineStudent}
      />
      {showModal && (
        <Modals
          title={'Add Notes'}
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
