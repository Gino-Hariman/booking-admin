import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';

import React, { useState } from 'react';
import LastLogin from '@/components/Tables/LastLogin';
import Actions from '@/components/Tables/Contents/Actions';
import TextLink from '@/components/Tables/Contents/Actions/TextLink';
import { Button } from '@/components/Buttons';
import Modals from '@/components/Modals';
import AddNewAdmin from '@/components/Modals/template/AddNewAdmin';
import useGetQuery from '@/hooks/useGetQuery';
import SwithModal from '@/components/Modals/template/SwitchModal';
import RenderResult from '@/components/RenderResult';
import useFilter from '@/hooks/useFilter';
import spreadObject from '@/helpers/spreadObject';

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const { filterState, handleNextPage, handlePrevPage } = useFilter();
  const columns = React.useMemo(
    () => [
      { Header: 'Username', accessor: 'username' },
      {
        Header: 'Password',
        accessor: 'password',
      },
      {
        Header: 'Role',
        accessor: 'permission',
      },
      {
        Header: 'Last Login',
        accessor: 'access_date',
        Cell: ({ data, row }) => {
          return (
            <LastLogin
              date={data[row.index].access_date}
              time={data[row.index].access_time}
            />
          );
        },
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
            />
          );
        },
      },

      {
        id: 'actions',
        Cell: ({ data, row }) => {
          return (
            <Actions
              hasEdit={false}
              data={data[row.index]}
              editFormPath={`/lounge-location/edit-lounge-location/${
                data[row.index].id_location
              }`}
              deletePath={`/delete`}
            />
          );
        },
      },
      {
        id: 'admin_history',
        Cell: ({ data, row }) => {
          return (
            <TextLink
              title="Admin History"
              path={{
                pathname: '/admin/admin-history',
                query: {
                  id_admin: data[row.index].id_admin,
                  // name: item.cell.row.original.name,
                },
              }}
            />
          );
        },
      },
    ],
    []
  );

  const { data, isFetching, isSuccess, isError } = useGetQuery(
    ['all-admin', ...spreadObject(filterState)],
    '',
    {
      params: filterState,
    }
  );

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <RenderResult
      state={{ isFetching, isError, isSuccess }}
      data={data}
      checkEmpty={false}
    >
      <>
        <TableList
          hasHeader={false}
          tableHeaderChild={
            <Button outlined title="+ Add Admin" onClick={handleOpenModal} />
          }
          tableTitle="Admin"
          columns={columns}
          data={data}
          pageNumber={filterState.page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          emptyTitle="Admin"
        />
        {showModal && (
          <Modals
            title="Add New Admin"
            setShowModal={setShowModal}
            handleCloseModal={handleCloseModal}
          >
            <AddNewAdmin />
          </Modals>
        )}
      </>
    </RenderResult>
  );
};

Admin.layout = AdminLayout;

export default Admin;
