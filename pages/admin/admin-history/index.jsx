import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import React from 'react';
import { useRouter } from 'next/router';
import useFilter from '@/hooks/useFilter';
import Breadcrumbs from '@/components/Breadcrumbs';
import useGetQuery from '@/hooks/useGetQuery';
import spreadObject from '@/helpers/spreadObject';
import RenderResult from '@/components/RenderResult';

const AdminHistory = () => {
  const router = useRouter();
  const { filterState, handleNextPage, handlePrevPage } = useFilter();
  const {
    query: { id_admin },
  } = router;
  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'order_id' },
      { Header: 'Student Name', accessor: 'nama' },
      {
        Header: 'Student Data',
        accessor: 'student_data',
        Cell: ({ data, value, row }) => {
          const { nim, program_name, kelas } = data[row.index];
          return <StudentDetail nim={nim} major={program_name} kelas={kelas} />;
        },
      },
      { Header: 'Lounge Location', accessor: 'name_location' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      {
        Header: 'status',
        accessor: 'status',
        Cell: ({ data, row }) => {
          return <TextStatus data={data[row.index]} />;
        },
      },
      { Header: 'note', accessor: 'note', Cell: TextNote },
    ],
    []
  );

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['admin-history', ...spreadObject(filterState)],
    `book/filtered?id_admin=${id_admin}`,
    {
      params: filterState,
    }
  );
  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      data={data}
      checkEmpty={false}
    >
      <>
        <Breadcrumbs />
        <TableList
          hasHeader={false}
          tableTitle="Admin History"
          columns={columns}
          data={data}
          pageNumber={filterState.page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          emptyTitle="Admin History"
        />
      </>
    </RenderResult>
  );
};

AdminHistory.layout = AdminLayout;

export default AdminHistory;
