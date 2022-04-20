import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import Switch from '@/components/Tables/Contents/Switch';
import TimeChip from '@/components/Tables/Contents/TimeChip';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import loungeLocationTable from '@/_mocks/loungeLocationTable';
import tableData from '@/_mocks/tableData';
import React, { useState } from 'react';

const LoungeLocation = () => {
  const handleChangeStatus = () => {
    console.log('changed12');
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Lounge Name',
        accessor: 'name',
        // Cell: AvatarCell,
        // imgAccessor: 'imgUrl',
        // emailAccessor: 'email',
      },
      {
        Header: 'Lounge Detail',
        accessor: 'detail',
      },
      {
        Header: 'Max Capacity',
        accessor: 'max_capacity',
        // Cell: StatusPill,
      },
      {
        Header: 'Status',
        accessor: 'status',
        // accessor: (rowData, rowIndex) => {
        //   return <Switch checked={checked} setChecked={setChecked} />;
        // },
        id: 'status',
        Cell: Switch,
      },
      // {
      //   Header: 'Lounge Booking Schedule',
      //   accessor: 'schedule',
      //   id: 'schedule',
      //   Cell: TimeChip,
      // },
      {
        Header: 'Lounge Photo',
        accessor: 'imgUrl',
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
  return (
    <TableList
      columns={columns}
      data={loungeLocationTable}
      handleChangeStatus={handleChangeStatus}
    />
  );
};

LoungeLocation.layout = AdminLayout;

export default LoungeLocation;
