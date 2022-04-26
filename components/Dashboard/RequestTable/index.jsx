import Chip from '@/components/Chip';
import ListItem from '@/components/ListData/ListItem';
import useGetQuery from '@/hooks/useGetQuery';
import studentRequest from '@/_mocks/studentRequest';

const RequestTable = () => {
  const { data, isFetching } = useGetQuery(
    [
      'teting',
      // rowsPerPage,
      // counter,
      // after,
      // before,
      // order,
      // orderBy,
      // filterDate?.startDate,
      // filterDate?.endDate,
      // state.website?.id,
      // state.group?.id,
    ],
    `/book`,
    {
      // keepPreviousData: true,
      onError: (err) => console.log('Sorry!', err),
    }
  );

  console.log('data', data);

  if (isFetching) return <p>loading</p>;
  return data.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      nim={item.nim}
      location={item.location}
      studentName={item.student_name}
      date={item.date}
      time={item.time}
      major={item.major}
      studentClass={item.kelas}
    >
      <>
        <Chip title="Accept" type="accept" width="w-normal-chip text-md-4" />
        <Chip title="Reject" width="w-normal-chip text-md-4" type="reject" />
      </>
    </ListItem>
  ));
};

export default RequestTable;
