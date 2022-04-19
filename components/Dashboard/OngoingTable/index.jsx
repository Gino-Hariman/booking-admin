import Chip from '@/components/Chip';
import EditListItem from '@/components/ListData/EditListItem';
import studentRequest from '@/_mocks/studentRequest';

const OngoingTable = ({ title = 'Acceppted By Admin 1' }) => {
  return studentRequest.map((item) => (
    <EditListItem
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
        type="accept"
      />
    </EditListItem>
  ));
};

export default OngoingTable;
