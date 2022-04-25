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

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Username', accessor: 'username' },
      {
        Header: 'Password',
        accessor: 'password',
      },
      {
        Header: 'Last Login',
        accessor: 'last_login',
        Cell: (item) => {
          const { date, time } = item.cell.value;
          return <LastLogin date={date} time={time} />;
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        id: 'status',
        Cell: Switch,
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
        data={adminData}
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
