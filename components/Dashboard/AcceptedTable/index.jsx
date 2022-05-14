import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import { LoadingModal } from '@/components/Loading';
import spreadObject from '@/helpers/spreadObject';
import UrlQueryBuilder from '@/helpers/UrlqueryBuilder';
import useGetQuery from '@/hooks/useGetQuery';
import studentRequest from '@/_mocks/studentRequest';

const AcceptedTable = ({ filterState }) => {
  const query = { ...filterState, status: 'approve' };
  const { data, isFetching } = useGetQuery(
    ['approve', 'table', ...spreadObject(filterState)],

    UrlQueryBuilder(`/book/filtered`, query),
    {
      keepPreviousData: true,
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
      time={item.time}
      major={item.program_name}
      studentClass={item.kelas}
    >
      <Chip
        isDisabled
        title={`Accepted By ${item.handle_by}`}
        width="w-large-chip text-md-3"
        type="accept"
      />
    </ListItem>
  ));
};

export default AcceptedTable;
