import { LoadingModal } from '@/components/Loading';
import spreadObject from '@/helpers/spreadObject';

import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import useTableButton from '@/hooks/useTableButton';
import React from 'react';
import Actions from '../Contents/Actions';
import TimeChip from '../Contents/TimeChip';
import TableList from '../TableList';

const TableBookingSchedule = () => {
  const { handleAdd } = useTableButton();
  const bookingScheduleColumns = React.useMemo(
    () => [
      {
        Header: 'Lounge Name',
        accessor: 'name_location',
      },
      {
        Header: 'Lounge Detail',
        accessor: 'spot_name',
      },
      {
        Header: 'Lounge Booking Schedules',
        accessor: 'times',
        Cell: TimeChip,
      },
      {
        id: 'actions',
        Cell: ({ data, row }) => {
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

  if (isFetching) return <LoadingModal />;

  return (
    <TableList
      onHeaderButtonClick={() =>
        handleAdd('/lounge-location/custom-new-booking-schedule')
      }
      tableTitle="Custom Lounge Schedule"
      btnTitle="+ Custom New Booking Schedule"
      columns={bookingScheduleColumns}
      data={data}
      pageNumber={filterState.page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TableBookingSchedule;
