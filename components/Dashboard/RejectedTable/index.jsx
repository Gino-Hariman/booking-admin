import Chip from '@/components/Chip';
import EditTableData from '@/components/Table/EditTableData';
import TableData from '@/components/Table/TableData';
import studentRequest from '@/_mocks/studentRequest';

const RejectedTable = ({ title = 'Rejected By Admin 1' }) => {
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
      <Chip
        title={title}
        width="min-w-large-chip w-large-chip text-md-3"
        type="reject"
      />
    </TableData>
  ));
};

export default RejectedTable;
