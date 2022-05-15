import { LoadingModal } from '@/components/Loading';
import SwithModal from '@/components/Modals/template/SwitchModal';
import Actions from '@/components/Tables/Contents/Actions';
import ImageContent from '@/components/Tables/Contents/ImageContent';
import Switch from '@/components/Tables/Contents/Switch';
import TableList from '@/components/Tables/TableList';
import useFilter from '@/hooks/useFilter';
import useGetQuery from '@/hooks/useGetQuery';
import usePostQuery from '@/hooks/usePostQuery';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';
import React from 'react';

const TableLoungeLocation = () => {
  const router = useRouter();
  const { notify } = useToast();
  const statusMutation = usePostQuery('/');

  const handleChangeStatus = (value) => {
    const data = value === 1 ? 0 : 1;

    statusMutation.mutate(data, {
      onSuccess: (res) => {
        notify('success', 'Successfully change status');
      },
      onError: (err) => {
        notify('error', 'Failed to change status!!');
      },
      // onSettled: () => {
      //   router.reload();
      // },
    });
  };

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
        accessor: (rowData, rowIndex) => {
          return (
            <SwithModal
              value={rowData.active}
              handleSubmit={handleChangeStatus}
            />
          );
        },
        // Cell: SwithModal,
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
  console.log('data lougne', data);
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
