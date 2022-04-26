import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import Loading from '@/components/Loading';
import useGetQuery from '@/hooks/useGetQuery';
import studentRequest from '@/_mocks/studentRequest';
import { useState } from 'react';

const RejectedTable = ({ page }) => {
  const [counter, setCounter] = useState(0);

  const { data, isFetching } = useGetQuery(
    ['reject', 'table', page],
    `/book/filtered?status=decline&page=${page}`,
    {
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );

  if (isFetching) return <Loading />;
  return data.map((item) => (
    <ListItem
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
        isDisabled
        title={`Rejected By ${item.accepted_by}`}
        width="min-w-large-chip w-large-chip text-md-3"
        type="reject"
      />
    </ListItem>
  ));
};

export default RejectedTable;
