import { LoadingModal } from '@/components/Loading';
import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import Switch from '@/components/Tables/Contents/Switch';
import TableList from '@/components/Tables/TableList';
import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import React from 'react';

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
        // accessor: (rowData, rowIndex) => {
        //   return <Switch checked={checked} setChecked={setChecked} />;
        // },
        id: 'active',
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
        accessor: 'image',
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

  const { page: pageNumber, handleNextPage, handlePrevPage } = useFilter();

  const { data, isFetching: loungeFetching } = useGetQuery(
    ['lounge-location', 'table', pageNumber],
    `/location?page=${pageNumber}`
  );
  if (loungeFetching) return <LoadingModal />;

  return (
    <TableList
      tableTitle="Lounge Location"
      btnTitle="+ Add New Lounge Location"
      addPath="/lounge-location/add-new-lounge-location"
      columns={loungeLocationColumns}
      data={data}
      pageNumber={pageNumber}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TableLoungeLocation;
