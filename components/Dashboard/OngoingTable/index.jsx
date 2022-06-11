import Chip from '@/components/Chip';
import EditListItem from '@/components/ListData/EditListItem';
import RenderResult from '@/components/RenderResult';
import spreadObject from '@/helpers/spreadObject';
import useGetQuery from '@/hooks/useGetQuery';
import dayjs from 'dayjs';

const OngoingTable = ({ filterState }) => {
  const query = {
    ...filterState,
    status: 'approve',
    date: dayjs().format('YYYY-MM-DD'),
  };

  const { data, isError, isSuccess, isFetching } = useGetQuery(
    ['ongoing-table', ...spreadObject(query)],

    '/book/filtered',
    {
      params:
        filterState.start_date && filterState.end_date
          ? { ...filterState, status: 'approve' }
          : query,
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );
  console.log('1data', data);
  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      emptyTitle="Rejected Student"
      data={data}
    >
      {data?.map((item) => (
        <EditListItem
          key={item.order_id}
          orderID={item.order_id}
          nim={item.nim}
          location={item.name_location}
          studentName={item.nama}
          date={item.date}
          time={item.time}
          major={item.jurusan}
          studentClass={item.kelas}
          note={item.absent_note}
          present={item.present}
        >
          <Chip
            title={`Accepted By ${item.handle_by}`}
            width="min-w-large-chip w-large-chip text-md-3"
            type="accept"
          />
        </EditListItem>
      ))}
    </RenderResult>
  );
};

export default OngoingTable;
