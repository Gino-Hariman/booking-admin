import Chip from '@/components/Chip';
import TableData from '@/components/Table/TableData';
import studentRequest from '@/_mocks/studentRequest';

const RequestTable = () => {
  return studentRequest.map((item) => (
    <TableData
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
    </TableData>
  ));
};

export default RequestTable;
