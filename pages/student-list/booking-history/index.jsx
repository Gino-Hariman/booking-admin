import Breadcrumbs from '@/components/Breadcrumbs';
import RenderResult from '@/components/RenderResult';
import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import spreadObject from '@/helpers/spreadObject';
import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import useTableButton from '@/hooks/useTableButton';
import AdminLayout from '@/layout/AdminLayout';
import { useRouter } from 'next/router';
import React from 'react';

const BookingHistory = () => {
  const router = useRouter();
  const { handleDownload } = useTableButton();
  const { filterState, handleNextPage, handlePrevPage } = useFilter();
  const {
    query: { name, nim, major, kelas },
  } = router;

  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'order_id' },
      {
        Header: 'Lounge Location',
        accessor: 'location',
        Cell: ({ data, value, row }) => {
          const { name_location, spot_name } = value;
          return (
            <p data={data[row.index]}>{`${name_location} - ${spot_name}`}</p>
          );
        },
      },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ data, value, row }) => {
          return <TextStatus data={value} />;
        },
      },
      { Header: 'Note', accessor: 'note', Cell: TextNote },
    ],
    []
  );

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['student-list', 'history', ...spreadObject(filterState)],
    `/book/report?nim=${nim}`,
    { params: { page: filterState.page } }
  );

  return (
    <>
      <Breadcrumbs />
      {
        <RenderResult
          state={{ isFetching, isError, isSuccess }}
          data={data}
          checkEmpty={false}
        >
          <TableList
            onHeaderButtonClick={handleDownload}
            tableHeaderChild={
              <StudentDetail isHeader nim={nim} major={major} kelas={kelas} />
            }
            tableTitle={`${name} Booking History`}
            columns={columns}
            data={data}
            btnTitle="Download Student List"
            pageNumber={filterState.page}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            emptyTitle="Booking History"
          />
        </RenderResult>
      }
    </>
  );
};

BookingHistory.layout = AdminLayout;

export default BookingHistory;
