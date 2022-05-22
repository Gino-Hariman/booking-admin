import { LoadingModal } from '@/components/Loading';
import spreadObject from '@/helpers/spreadObject';

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
        accessor: 'times',
        // id: 'avail_time',
        Cell: TimeChip,
      },
      {
        id: 'actions',
        Cell: ({ data, value, row }) => {
          return (
            <Actions
              data={data[row.index]}
              editFormPath={`/lounge-location/edit-custom-lounge-location/${
                data[row.index].id_location
              }`}
              deletePath={`/location/custom/delete`}
            />
          );
        },
      },
    ],
    []
  );

  const { filterState, handleNextPage, handlePrevPage } = useFilter();

  const { data, isFetching } = useGetQuery(
    ['cutom', 'location', ...spreadObject(filterState)],
    '/location/custom'
  );

  console.log('123', data);
  if (isFetching) return <LoadingModal />;

  return (
    <TableList
      tableTitle="Custom Lounge Schedule"
      btnTitle="+ Custom New Booking Schedule"
      columns={bookingScheduleColumns}
      addPath="/lounge-location/custom-new-booking-schedule"
      data={data}
      pageNumber={filterState.page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TableBookingSchedule;
