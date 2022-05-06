import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import usePostQuery from '@/hooks/usePostQuery';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';
import studentRequest from '@/_mocks/studentRequest';
import Cookies from 'js-cookie';
import { useState } from 'react';

const RequestTable = ({ page }) => {
  const [counter, setCounter] = useState(0);
  const { notify } = useToast();
  const { data, isFetching } = useGetQuery(
    ['request', 'table', counter, page],
    `/book/filtered?status=pending&page=${page}`,
    {
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );
  console.log('data', data);
  console.log('222');
  const acceptMutation = usePutQuery('/book/approve');
  const declineMutation = usePutQuery('/book/decline');

  if (isFetching) return <LoadingModal />;

  const handleAccept = (id) => {
    setCounter((prev) => prev + 2);

    acceptMutation.mutate(
      {
        order_id: id,
        handle_by: Cookies.get('name'),
        id_admin: Cookies.get('adminID'),
      },
      {
        onSuccess: (res) => {
          notify('success', `Approve ${res}`);
        },
      }
    );
  };

  const handleReject = (id) => {
    setCounter((prev) => prev + 1);

    declineMutation.mutate(
      { order_id: id, accept_by: localStorage.getItem('name') },
      {
        onSuccess: (res) => {
          notify('error', `Decline ${res}`);
        },
      }
    );
  };
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
          time={`${item.start_time} - ${item.end_time}`}
          major={item.prodi}
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
              onClick={() => handleReject(item.order_id)}
            />
          </>
        </ListItem>
      ))}
    </>
  );
};

export default RequestTable;
