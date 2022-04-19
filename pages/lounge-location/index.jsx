import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import TimeChip from '@/components/Tables/Contents/TimeChip';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import tableData from '@/_mocks/tableData';
import React from 'react';

const LoungeLocation = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        // Cell: AvatarCell,
        imgAccessor: 'imgUrl',
        emailAccessor: 'email',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
        // Cell: StatusPill,
      },
      {
        Header: 'Lounge Booking Schedule',
        accessor: 'schedule',
        id: 'schedule',
        Cell: TimeChip,
      },
      {
        Header: 'Role',
        accessor: 'role',
        Cell: ImageContent,
        // Filter: SelectColumnFilter, // new
        // filter: 'includes',
      },
      {
        id: 'actions',
        Cell: Actions,
      },
    ],
    []
  );
  return <TableList columns={columns} data={tableData} />;
};

LoungeLocation.layout = AdminLayout;

export default LoungeLocation;
