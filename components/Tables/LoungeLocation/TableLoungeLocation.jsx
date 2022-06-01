import SwithModal from '@/components/Modals/template/SwitchModal';
import RenderResult from '@/components/RenderResult';
import spreadObject from '@/helpers/spreadObject';
import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import useTableButton from '@/hooks/useTableButton';

import React from 'react';
import Actions from '../Contents/Actions';
import ImageContent from '../Contents/ImageContent';
import TableList from '../TableList';

const TableLoungeLocation = () => {
  const { handleAdd } = useTableButton();
  const loungeLocationColumns = React.useMemo(
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
        Header: 'Max Capacity',
        accessor: 'max_capacity',
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
      },
      {
        id: 'actions',
        Cell: ({ data, row }) => {
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

  const { data, isFetching, isError, isSuccess } = useGetQuery(
    ['lounge-location-table', ...spreadObject(filterState)],
    `/location?page=${filterState.page}`
  );

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      data={data}
      checkEmpty={false}
    >
      <TableList
        onHeaderButtonClick={() =>
          handleAdd('/lounge-location/add-new-lounge-location')
        }
        tableTitle="Lounge Location"
        btnTitle="+ Add New Lounge Location"
        columns={loungeLocationColumns}
        data={data}
        pageNumber={filterState.page}
        emptyTitle="Lounge Location"
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </RenderResult>
  );
};

export default TableLoungeLocation;
