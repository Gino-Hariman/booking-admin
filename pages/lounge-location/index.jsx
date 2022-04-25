import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import Switch from '@/components/Tables/Contents/Switch';
import TimeChip from '@/components/Tables/Contents/TimeChip';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import bookingSchedules from '@/_mocks/bookingSchedules';
import loungeLocationTable from '@/_mocks/loungeLocationTable';
import React from 'react';
import { toast } from 'react-toastify';

toast.configure();
const LoungeLocation = () => {
  const handleChangeStatus = () => {
    console.log('changed12');
  };

  const loungeLocationColumns = React.useMemo(
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

  const bookingScheduleColumns = React.useMemo(
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
        Header: 'Lounge Booking Schedules',
        accessor: 'schedule',
        id: 'schedule',
        Cell: TimeChip,
      },
      {
        id: 'actions',
        Cell: Actions,
      },
    ],
    []
  );

  return (
    <div>
      <TableList
        tableTitle="Lounge Location"
        btnTitle="+ Add New Lounge Location"
        columns={loungeLocationColumns}
        data={loungeLocationTable}
        addPath="/lounge-location/add-new-lounge-location"
        handleChangeStatus={handleChangeStatus}
      />
      <TableList
        tableTitle="Lounge Location"
        btnTitle="+ Custom New Booking Schedule"
        columns={bookingScheduleColumns}
        data={bookingSchedules}
        addPath="/lounge-location/custom-new-booking-schedule"
      />
    </div>
  );
};

LoungeLocation.layout = AdminLayout;

export default LoungeLocation;
