import { Button } from '@/components/Buttons';
import { LoadingModal } from '@/components/Loading';
import RenderResult from '@/components/RenderResult';
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
              hasEdit={false}
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

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['cutom', 'location', ...spreadObject(filterState)],
    '/location/custom'
  );

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      data={data}
      checkEmpty={false}
    >
      <TableList
        hasHeader={false}
        tableHeaderChild={
          <Button
            outlined
            title="+ Custom New Booking Schedule"
            onClick={() =>
              handleAdd('/lounge-location/custom-new-booking-schedule')
            }
          />
        }
        // onHeaderButtonClick={() =>
        //   handleAdd('/lounge-location/custom-new-booking-schedule')
        // }
        tableTitle="Custom Lounge Schedule"
        btnTitle="+ Custom New Booking Schedule"
        columns={bookingScheduleColumns}
        data={data}
        pageNumber={filterState.page}
        emptyTitle="Custom Lounge Schedule"
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </RenderResult>
  );
};

export default TableBookingSchedule;
