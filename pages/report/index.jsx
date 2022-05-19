import DatePicker from '@/components/DatePicker';
import Dropdowns from '@/components/Dropdowns';
import { TableFilter } from '@/components/ListData/components';
import TextNote from '@/components/Tables/Contents/TextNote';
import TextStatus from '@/components/Tables/Contents/TextStatus';
import StudentDetail from '@/components/Tables/StudentDetail';
import TableList from '@/components/Tables/TableList';
import AdminLayout from '@/layout/AdminLayout';
import { dateFormat } from '@/utils/dateTimeConfig';
import reportData from '@/_mocks/reportData';
import LocationIcon from '@/icons/Fill/Location.svg';
import MajorIcon from '@/icons/Fill/Major.svg';
import dayjs from 'dayjs';
import React from 'react';
import majorData from '@/_mocks/majorData';
import locationData from '@/_mocks/locationData';
import acceptedBy from '@/_mocks/acceptedBy';
import useGetQuery from '@/hooks/useGetQuery';
import { LoadingModal } from '@/components/Loading';
import useFilter from '@/hooks/useFilter';
import spreadObject from '@/helpers/spreadObject';

const Report = () => {
  const { filterState, handleNextPage, handlePrevPage, handleSelectFilter } =
    useFilter();
  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'order_id' },
      { Header: 'Student Name', accessor: 'nama' },
      {
        Header: 'Student Data',
        accessor: 'student_data',
        Cell: ({ data, value, row }) => {
          const { nim, major, kelas } = data[row.index];
          return <StudentDetail nim={nim} major={major} kelas={kelas} />;
        },
      },
      { Header: 'Lounge Location', accessor: 'name_location' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      {
        Header: 'status',
        accessor: 'active',
        Cell: ({ data, value, row }) => {
          return <TextStatus data={data[row.index]} />;
        },
      },
      { Header: 'Note', accessor: 'note', Cell: TextNote },
    ],
    []
  );
  console.log('filterState', filterState);
  const { data, isFetching } = useGetQuery(
    ['all', 'report', ...spreadObject(filterState)],
    '/book/report',
    {
      params: filterState,
    }
  );

  const { data: locationData, isFetching: locationFetch } = useGetQuery(
    ['simple', 'location'],
    '/location/all',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );
  const { data: majorData, isFetching: majorFetch } = useGetQuery(
    ['simple', 'major'],
    '/program',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );
  const { data: admin, isFetching: adminFetch } = useGetQuery(
    ['simple', 'admin'],
    '/',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );

  if (isFetching) return <LoadingModal />;
  return (
    <TableList
      tableHeaderChild={
        <TableFilter>
          <div className="flex my-4 xl:my-0 xl:space-x-4 flex-wrap">
            <DatePicker placeholder={dayjs().format(dateFormat)} />
            <Dropdowns
              placeholder="Location"
              Icon={LocationIcon}
              datas={locationData}
              loading={locationFetch}
              idItem="id_location"
              valueItem="name_location"
              handleSelectFilter={handleSelectFilter}
            />
            <Dropdowns
              placeholder="Major"
              Icon={MajorIcon}
              datas={majorData}
              loading={majorFetch}
              idItem="id_program"
              valueItem="program_name"
              handleSelectFilter={handleSelectFilter}
            />
            <Dropdowns
              placeholder="Accepted By"
              // Icon={MajorIcon}
              datas={admin}
              loading={adminFetch}
              idItem="id_admin"
              valueItem="username"
              handleSelectFilter={handleSelectFilter}
            />
          </div>
        </TableFilter>
      }
      tableTitle="Report"
      columns={columns}
      data={data}
      btnTitle="Download Report"
      pageNumber={filterState.page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

Report.layout = AdminLayout;

export default Report;
