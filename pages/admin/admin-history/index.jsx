import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import reportData from '@/_mocks/reportData';
import React from 'react';
import { useRouter } from 'next/router';
import useTableButton from '@/hooks/useTableButton';
import useFilter from '@/hooks/useFilter';

const AdminHistory = () => {
  const router = useRouter();
  const { handleDownload } = useTableButton();
  const { filterState, handleNextPage, handlePrevPage } = useFilter();
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
      onHeaderButtonClick={handleDownload}
      hasHeader={false}
      tableTitle={`${name} Booking History`}
      columns={columns}
      data={reportData}
      btnTitle="Download Report"
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      emptyTitle="Report"
    />
  );
};

AdminHistory.layout = AdminLayout;

export default AdminHistory;
