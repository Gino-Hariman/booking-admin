import { LoadingModal } from '@/components/Loading';
import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import TimeChip from '@/components/Tables/Contents/TimeChip';
import {
  TableBookingSchedule,
  TableLoungeLocation,
} from '@/components/Tables/LoungeLocation';

import AdminLayout from '@/layout/AdminLayout';

import React from 'react';
import { toast } from 'react-toastify';

toast.configure();
const LoungeLocation = () => {
  // const bookingScheduleColumns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Lounge Name',
  //       accessor: 'name_location',
  //       // Cell: AvatarCell,
  //       // imgAccessor: 'imgUrl',
  //       // emailAccessor: 'email',
  //     },
  //     {
  //       Header: 'Lounge Detail',
  //       accessor: 'spot_name',
  //     },
  //     {
  //       Header: 'Lounge Booking Schedules',
  //       accessor: 'avail_time',
  //       id: 'schedule',
  //       Cell: TimeChip,
  //     },
  //     {
  //       id: 'actions',
  //       Cell: Actions,
  //     },
  //   ],
  //   []
  // );

  // const { page: pageNumber, handleNextPage, handlePrevPage } = useFilter();

  // const { data: loungeData, isFetching: loungeFetching } = useGetQuery(
  //   ['lounge-location', 'table', pageNumber],
  //   `/location?page=${pageNumber}`
  // );
  // if (loungeFetching) return <LoadingModal />;

  return (
    <div>
      <TableLoungeLocation />
      <TableBookingSchedule />

      {/* <TableLoungeLocation
        tableTitle="Lounge Location"
        btnTitle="+ Add New Lounge Location"
        columns={loungeLocationColumns}
        data={loungeData}
        addPath="/lounge-location/add-new-lounge-location"
        pageNumber={pageNumber}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      /> */}
      {/* 
      <TableList
        tableTitle="Lounge Location"
        btnTitle="+ Custom New Booking Schedule"
        columns={bookingScheduleColumns}
        data={bookingSchedules}
        addPath="/lounge-location/custom-new-booking-schedule"
      /> */}
    </div>
  );
};

LoungeLocation.layout = AdminLayout;

export default LoungeLocation;
