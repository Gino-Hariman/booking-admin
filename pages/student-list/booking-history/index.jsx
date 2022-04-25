import Breadcrumbs from '@/components/Breadcrumbs';
import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import bookingHistory from '@/_mocks/bookingHistory';
import { useRouter } from 'next/router';
import React from 'react';

const BookingHistory = () => {
  const router = useRouter();
  const {
    query: { name, nim, major, kelas },
  } = router;

  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'booking_id' },
      { Header: 'Lounge Location', accessor: 'lounge_location' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'Status', accessor: 'status', Cell: TextStatus },
      { Header: 'Note', accessor: 'note', Cell: TextNote },
    ],
    []
  );

  return (
    <>
      <Breadcrumbs />
      <TableList
        tableHeaderChild={
          <StudentDetail isHeader nim={nim} major={major} kelas={kelas} />
        }
        tableTitle={`${name} Booking History`}
        columns={columns}
        data={bookingHistory}
        btnTitle="Download Student List"
      />
    </>
  );
};

BookingHistory.layout = AdminLayout;

export default BookingHistory;
