import Chip from '@/components/Chip';
import EditListItem from '@/components/ListData/EditListItem';
import { LoadingModal } from '@/components/Loading';
import spreadObject from '@/helpers/spreadObject';
import UrlQueryBuilder from '@/helpers/UrlqueryBuilder';
import useGetQuery from '@/hooks/useGetQuery';
import dayjs from 'dayjs';

const OngoingTable = ({ filterState }) => {
  const query = {
    ...filterState,
    status: 'approve',
    date: dayjs().format('YYYY-MM-DD'),
  };

  const { data, isFetching } = useGetQuery(
    ['ongoing', 'table', ...spreadObject(query)],
    UrlQueryBuilder(
      `/book/filtered`,
      filterState.start_date && filterState.end_date
        ? { ...filterState, status: 'approve' }
        : query
    ),
    {
      keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );
  if (isFetching) return <LoadingModal />;

  return data.map((item) => (
    <EditListItem
      key={item.order_id}
      orderID={item.order_id}
      nim={item.nim}
      location={item.name_location}
      studentName={item.nama}
      date={item.date}
      time={`${item.start_time} - ${item.end_time}`}
      major={item.jurusan}
      studentClass={item.kelas}
      note={item.note}
      present={item.present}
    >
      <Chip
        title={`Accepted By ${item.handle_by}`}
        width="min-w-large-chip w-large-chip text-md-3"
        type="accept"
      />
    </EditListItem>
  ));
};

export default OngoingTable;
