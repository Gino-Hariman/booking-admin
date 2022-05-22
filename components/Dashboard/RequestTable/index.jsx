import Chip from '@/components/Chip';
import EmptyList from '@/components/EmptyState/EmptyList';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import Modals from '@/components/Modals';
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

  const { data, isFetching } = useGetQuery(
    ['request-table', ...spreadObject(filterState)],
    `/book/filtered?status=pending`,
    {
      params: filterState,
      // keepPreviousData: true,
      onError: (err) => notify('error', 'Sorry, Something went wrong!'),
    }
  );

  console.log('filterState', filterState);
  const acceptMutation = usePutQuery('/book/approve');
  const declineMutation = usePutQuery('/book/decline');
  const onChange = (e) => {
    setNotes(e.target.value);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDecline = () => {
    setIsPresent(0);
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
        handle_by: Cookies.get('name'),
        // id_admin: Cookies.get('adminID'),
      },
      {
        onSuccess: (res) => {
          notify('success', `Decline ${res}`);
        },
        onSettled: () => {
          queryClient.invalidateQueries('request');
        },
      }
    );
  };

  if (isFetching) return <LoadingModal />;

  // if (Boolean(data.length === 0)) return <EmptyList title="Student Request" />;

  return (
    <>
      {data.map((item) => (
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
    </>
  );
};

export default RequestTable;
