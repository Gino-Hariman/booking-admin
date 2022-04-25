import Dropdowns from '@/components/Dropdowns';
import { TableFilter } from '@/components/ListData/components';
import TextLink from '@/components/Tables/Contents/Actions/TextLink';
import MajorIcon from '@/icons/Fill/Major.svg';

import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import studentList from '@/_mocks/studentList';
import React from 'react';
import acceptedBy from '@/_mocks/acceptedBy';

const StudentList = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'NIM', accessor: 'nim' },
      { Header: 'Nama', accessor: 'name' },
      { Header: 'Kelas', accessor: 'kelas' },
      { Header: 'Jurusan', accessor: 'jurusan' },
      {
        id: 'actions',
        Cell: (item) => {
          return (
            <TextLink
              title="Booking History"
              path={{
                pathname: '/student-list/booking-history',
                query: {
                  name: item.cell.row.original.name,
                  nim: item.cell.row.original.nim,
                  major: item.cell.row.original.jurusan,
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
  return (
    <TableList
      tableHeaderChild={
        <TableFilter>
          <Dropdowns placeholder="Major" Icon={MajorIcon} datas={acceptedBy} />
        </TableFilter>
      }
      tableTitle="Student List"
      columns={columns}
      data={studentList}
      btnTitle="Download Student List"
    />
  );
};

StudentList.layout = AdminLayout;

export default StudentList;
