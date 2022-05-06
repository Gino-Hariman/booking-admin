import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import studentRequest from '@/_mocks/studentRequest';

const AcceptedTable = ({ page }) => {
  const { data, isFetching } = useGetQuery(
    ['approve', 'table', page],
    `/book/filtered?status=approve&page=${page}`,
    {
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );

  if (isFetching) return <LoadingModal />;
  return data.map((item) => (
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
      <Chip
        isDisabled
        title={`Accepted By ${item.accepted_by}`}
        width="w-large-chip text-md-3"
        type="accept"
      />
    </ListItem>
  ));
};

export default AcceptedTable;
