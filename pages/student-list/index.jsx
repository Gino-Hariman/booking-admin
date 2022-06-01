import Dropdowns from '@/components/Dropdowns';
import { TableFilter } from '@/components/ListData/components';
import TextLink from '@/components/Tables/Contents/Actions/TextLink';
import MajorIcon from '@/icons/Fill/Major.svg';

import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import React from 'react';
import useGetQuery from '@/hooks/useGetQuery';
import useFilter from '@/hooks/useFilter';
import spreadObject from '@/helpers/spreadObject';
import useTableButton from '@/hooks/useTableButton';
import RenderResult from '@/components/RenderResult';

const StudentList = () => {
  const { handleDownload } = useTableButton();
  const { filterState, handleSelectFilter, handleNextPage, handlePrevPage } =
    useFilter();
  const columns = React.useMemo(
    () => [
      { Header: 'NIM', accessor: 'nim' },
      { Header: 'Nama', accessor: 'nama' },
      { Header: 'Kelas', accessor: 'kelas' },
      { Header: 'Jurusan', accessor: 'program_name' },
      {
        id: 'actions',
        Cell: (item) => {
          console.log('item.cell.row.original', item.cell.row.original);
          return (
            <TextLink
              title="Booking History"
              path={{
                pathname: '/student-list/booking-history',
                query: {
                  name: item.cell.row.original.nama,
                  nim: item.cell.row.original.nim,
                  major: item.cell.row.original.program_name,
                  kelas: item.cell.row.original.kelas,
                },
              }}
            />
          );
        },
      },
    ],
    []
  );

  const { data: majorData, isFetching: majorFetch } = useGetQuery(
    ['simple', 'major'],
    '/program',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['student-list', ...spreadObject(filterState)],
    '/student/list',
    {
      params: filterState,
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      data={data}
      checkEmpty={false}
    >
      <TableList
        onHeaderButtonClick={handleDownload}
        tableHeaderChild={
          <TableFilter>
            <Dropdowns
              placeholder="Major"
              Icon={MajorIcon}
              datas={majorData}
              loading={majorFetch}
              idItem="id_program"
              valueItem="program_name"
              handleSelectFilter={handleSelectFilter}
            />
          </TableFilter>
        }
        pageNumber={filterState.page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        tableTitle="Student List"
        columns={columns}
        data={data}
        btnTitle="Download Student List"
        emptyTitle="Student List"
      />
    </RenderResult>
  );
};

StudentList.layout = AdminLayout;

export default StudentList;
