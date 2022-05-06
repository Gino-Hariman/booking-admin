import Chip from '@/components/Chip';
import EditListItem from '@/components/ListData/EditListItem';
import { LoadingModal } from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import studentRequest from '@/_mocks/studentRequest';
import dayjs from 'dayjs';

const OngoingTable = ({ page }) => {
  const { data, isFetching } = useGetQuery(
    ['approve', 'table', page],
    `/book/filtered?status=approve&date=${dayjs().format(
      'YYYY-MM-DD'
    )}&page=${page}`,
    {
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );
  // if (isFetching) return <LoadingModal />;
  return studentRequest.map((item) => (
    <EditListItem
      key={item.order_id}
      id={item.order_id}
      nim={item.nim}
      location={item.name_location}
      studentName={item.nama}
      date={item.date}
      time={`${item.start_time} - ${item.end_time}`}
      major={item.jurusan}
      studentClass={item.kelas}
    >
      <Chip
        title={`Accepted By ${item.accepted_by}`}
        width="min-w-large-chip w-large-chip text-md-3"
        type="accept"
      />
    </EditListItem>
  ));
};

export default OngoingTable;
