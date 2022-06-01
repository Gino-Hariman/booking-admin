import Chip from '@/components/Chip';
import EmptyList from '@/components/EmptyState/EmptyList';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import RenderResult from '@/components/RenderResult';
import spreadObject from '@/helpers/spreadObject';
import UrlQueryBuilder from '@/helpers/UrlqueryBuilder';
import useGetQuery from '@/hooks/useGetQuery';

const RejectedTable = ({ filterState }) => {
  const query = { ...filterState, status: 'decline' };
  const { data, isError, isSuccess, isFetching } = useGetQuery(
    ['reject', 'table', ...spreadObject(query)],
    UrlQueryBuilder('/book/filtered', query),
    {
      keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      emptyTitle="Rejected Student"
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
          <Chip
            isDisabled
            title={`Rejected By ${item.handle_by}`}
            width="min-w-large-chip w-large-chip text-md-3"
            type="reject"
          />
        </ListItem>
      ))}
    </RenderResult>
  );
};

export default RejectedTable;
