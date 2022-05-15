import { LoadingModal } from '@/components/Loading';

import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import React from 'react';
import Actions from '../Contents/Actions';
import TimeChip from '../Contents/TimeChip';
import TableList from '../TableList';

const TableBookingSchedule = () => {
  const bookingScheduleColumns = React.useMemo(
    () => [
      {
        Header: 'Lounge Name',
        accessor: 'name_location',
        // Cell: AvatarCell,
        // imgAccessor: 'imgUrl',
        // emailAccessor: 'email',
      },
      {
        Header: 'Lounge Detail',
        accessor: 'spot_name',
      },
      {
        Header: 'Lounge Booking Schedules',
        accessor: 'avail_time',
        id: 'avail_time',
        Cell: TimeChip,
      },
      {
        id: 'actions',
        Cell: Actions,
      },
    ],
    []
  );

  const { page: pageNumber, handleNextPage, handlePrevPage } = useFilter();

  const { data, isFetching } = useGetQuery(
    ['booking-schedule', 'table', pageNumber],
    `/location/custom/location?page=${pageNumber}`
  );

  console.log('123', data);
  if (isFetching) return <LoadingModal />;

  return (
    <TableList
      tableTitle="Lounge Location"
      btnTitle="+ Custom New Booking Schedule"
      columns={bookingScheduleColumns}
      addPath="/lounge-location/custom-new-booking-schedule"
      data={data}
      pageNumber={pageNumber}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TableBookingSchedule;
