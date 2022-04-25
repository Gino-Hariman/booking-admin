import DatePicker from '@/components/DatePicker';
import Dropdowns from '@/components/Dropdowns';
import { TableFilter } from '@/components/ListData/components';
import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import { dateFormat } from '@/utils/dateTimeConfig';
import reportData from '@/_mocks/reportData';
import LocationIcon from '@/icons/Fill/Location.svg';
import MajorIcon from '@/icons/Fill/Major.svg';
import dayjs from 'dayjs';
import React from 'react';
import majorData from '@/_mocks/majorData';
import locationData from '@/_mocks/locationData';
import acceptedBy from '@/_mocks/acceptedBy';
import { useRouter } from 'next/router';

const AdminHistory = () => {
  const router = useRouter();
  const {
    query: { name },
  } = router;
  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'booking_id' },
      { Header: 'Student Name', accessor: 'student_name' },
      {
        Header: 'Student Data',
        accessor: 'student_data',
        Cell: (item) => {
          const { nim, major, kelas } = item.cell.value;
          return <StudentDetail nim={nim} major={major} kelas={kelas} />;
        },
      },
      { Header: 'Lounge Location', accessor: 'lounge_location' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'status', accessor: 'status', Cell: TextStatus },
      { Header: 'note', accessor: 'note', Cell: TextNote },
    ],
    []
  );
  return (
    <TableList
      hasHeader={false}
      tableTitle={`${name} Booking History`}
      columns={columns}
      data={reportData}
      btnTitle="Download Report"
    />
  );
};

AdminHistory.layout = AdminLayout;

export default AdminHistory;
