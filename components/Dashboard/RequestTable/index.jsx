import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import Modals from '@/components/Modals';
import BookingNotes from '@/components/Modals/template/BookingNotes';
import RenderResult from '@/components/RenderResult';
import spreadObject from '@/helpers/spreadObject';
import useGetQuery from '@/hooks/useGetQuery';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQueryClient } from 'react-query';

const RequestTable = ({ filterState }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { notify } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState('');

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['request-table', ...spreadObject(filterState)],
    `/book/filtered?status=pending`,
    {
      params: filterState,
      keepPreviousData: true,
      onError: (err) => notify('error', 'Sorry, Something went wrong!'),
    }
  );

  const acceptMutation = usePutQuery('/book/approve');
  const declineMutation = usePutQuery('/book/decline');
  const onChange = (e) => {
    setNotes(e.target.value);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDecline = () => {
    // setIsPresent(0);
    setShowModal(true);
  };

  const handleAccept = (id) => {
    acceptMutation.mutate(
      {
        order_id: id,
        handle_by: Cookies.get('name'),
        // id_admin: Cookies.get('adminID'),
      },
      {
        onSuccess: (res) => {
          notify('success', `Approve ${res}`);
          router.reload();
        },
        onSettled: () => {
          queryClient.invalidateQueries('request');
        },
      }
    );
  };

  const handleSubmitNote = (id) => {
    declineMutation.mutate(
      {
        order_id: id,
        note: notes,
      },
      {
        onSuccess: (res) => {
          if (res.type === 'success') {
            setShowModal(false);
            return notify('success', res.message);
          }
        },
        onSettled: () => {
          queryClient.invalidateQueries('request');
        },
      }
    );
  };

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      emptyTitle="Student Request"
      data={data}
    >
      {data?.map((item) => (
        <ListItem
          key={item.order_id}
          id={item.order_id}
          nim={item.nim}
          location={item.name_location}
          studentName={item.nama}
          date={item.date}
          time={item.time}
          major={item.program_name}
          studentClass={item.kelas}
        >
          <>
            <Chip
              title="Accept"
              type="accept"
              width="w-normal-chip text-md-4"
              onClick={() => handleAccept(item.order_id)}
            />
            <Chip
              title="Reject"
              width="w-normal-chip text-md-4"
              type="reject"
              onClick={handleDecline}
            />

            {showModal && (
              <Modals
                // notes={notes}
                title="Add Reject Messages"
                setShowModal={setShowModal}
                handleCloseModal={handleCloseModal}
              >
                <BookingNotes
                  value={notes}
                  onChange={onChange}
                  onSubmit={() => handleSubmitNote(item.order_id)}
                />
              </Modals>
            )}
          </>
        </ListItem>
      ))}
    </RenderResult>
  );
};

export default RequestTable;
