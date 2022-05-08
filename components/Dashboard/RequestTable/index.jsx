import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import usePutQuery from '@/hooks/usePutQuery';
import useToast from '@/hooks/useToast';
import Cookies from 'js-cookie';
import { useQueryClient } from 'react-query';

const RequestTable = ({ page }) => {
  const queryClient = useQueryClient();
  const { notify } = useToast();

  const { data, isFetching } = useGetQuery(
    ['request', 'table', page],
    `/book/filtered?status=pending&page=${page}`,
    {
      // keepPreviousData: true,
      onError: (err) => notify('error', 'Sorry, Something went wrong!'),
    }
  );

  const acceptMutation = usePutQuery('/book/approve');
  const declineMutation = usePutQuery('/book/decline');

  if (isFetching) return <LoadingModal />;

  const handleAccept = (id) => {
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
        onSettled: () => {
          queryClient.invalidateQueries('request');
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
