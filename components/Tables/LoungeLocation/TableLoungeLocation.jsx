import { LoadingModal } from '@/components/Loading';
import SwithModal from '@/components/Modals/template/SwitchModal';
import spreadObject from '@/helpers/spreadObject';
import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';

import React from 'react';
import Actions from '../Contents/Actions';
import ImageContent from '../Contents/ImageContent';
import TableList from '../TableList';

const TableLoungeLocation = () => {
  const loungeLocationColumns = React.useMemo(
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
        Header: 'Max Capacity',
        accessor: 'max_capacity',
        // Cell: StatusPill,
      },
      {
        Header: 'Status',
        accessor: 'active',

        Cell: ({ data, value, row }) => {
          return (
            <SwithModal
              value={value}
              data={data[row.index]}
              modalTitle="If you do these changes, the system will not display the lounge location on the student lounge reservation website"
              lBtnTitle={`Yes, ${value === 1 ? 'Disable' : 'Enable'} Location`}
              rBtnTitle="No, Discard Changes"
              isLocation
            />
          );
        },
      },

      {
        Header: 'Lounge Photo',
        accessor: 'image',
        Cell: ImageContent,
        // Filter: SelectColumnFilter, // new
        // filter: 'includes',
      },
      {
        id: 'actions',
        Cell: ({ data, value, row }) => {
          return (
            <Actions
              data={data[row.index]}
              editFormPath={`/lounge-location/edit-lounge-location/${
                data[row.index].id_location
              }`}
              deletePath={`/location/delete`}
            />
          );
        },
      },
    ],
    []
  );

  const { filterState, handleNextPage, handlePrevPage } = useFilter();

  const { data, isFetching: loungeFetching } = useGetQuery(
    ['lounge-location-table', ...spreadObject(filterState)],
    `/location?page=${filterState.page}`
  );
  if (loungeFetching) return <LoadingModal />;
  console.log('data lougne', data);
  return (
    <TableList
      tableTitle="Lounge Location"
      btnTitle="+ Add New Lounge Location"
      addPath="/lounge-location/add-new-lounge-location"
      columns={loungeLocationColumns}
      data={data}
      pageNumber={filterState.page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TableLoungeLocation;
