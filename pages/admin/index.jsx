import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';

import React, { useState } from 'react';
import adminData from '@/_mocks/adminData';
import LastLogin from '@/components/Tables/LastLogin';
import Actions from '@/components/Tables/Contents/Actions';
import TextLink from '@/components/Tables/Contents/Actions/TextLink';
import Switch from '@/components/Tables/Contents/Switch';
import { Button } from '@/components/Buttons';
import Modals from '@/components/Modals';
import AddNewAdmin from '@/components/Modals/template/AddNewAdmin';
import useGetQuery from '@/hooks/useGetQuery';
import { LoadingModal } from '@/components/Loading';
import SwithModal from '@/components/Modals/template/SwitchModal';

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const columns = React.useMemo(
    () => [
      // { Header: 'Name', accessor: '' },
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
        Cell: ({ data, value, row }) => {
          console.log('data', data[row.index]);
          // console.log('item.cell.value', item.cell.value);
          // const { access_date, access_time } = item.cell.value;
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
        Cell: Actions,
      },
      {
        id: 'admin_history',
        Cell: (item) => {
          return (
            <TextLink
              title="Admin History"
              path={{
                pathname: '/admin/admin-history',
                query: {
                  name: item.cell.row.original.name,
                },
              }}
            />
          );
        },
      },
    ],
    []
  );

  const { data: dataAdmin, isFetching } = useGetQuery();
  if (isFetching) return <LoadingModal />;

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddAdmin = () => {
    console.log('test add admin');
  };

  return (
    <>
      <TableList
        hasHeader={false}
        tableHeaderChild={
          <Button outlined title="+ Add Admin" onClick={handleOpenModal} />
        }
        tableTitle="Admin"
        columns={columns}
        data={dataAdmin}
      />
      {showModal && (
        <Modals setShowModal={setShowModal} handleCloseModal={handleCloseModal}>
          <AddNewAdmin />
        </Modals>
      )}
    </>
  );
};

Admin.layout = AdminLayout;

export default Admin;
