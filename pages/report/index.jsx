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

const Report = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'Booking ID', accessor: 'booking_id' },
      { Header: 'Student Name', accessor: 'student_name' },
      {
        Header: 'Student Data',
        accessor: 'student_data',
        Cell: (item) => {
          const { nim, major, kelas } = item.cell.value;
          return <StudentDetail nim={nim} major={major} kelas={kelas} />;
        },
      },
      { Header: 'Lounge Location', accessor: 'lounge_location' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Time', accessor: 'time' },
      { Header: 'status', accessor: 'status', Cell: TextStatus },
      { Header: 'note', accessor: 'note', Cell: TextNote },
    ],
    []
  );
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
            />
            <Dropdowns placeholder="Major" Icon={MajorIcon} datas={majorData} />
            <Dropdowns placeholder="Accepted By" datas={acceptedBy} />
          </div>
        </TableFilter>
      }
      tableTitle="Report"
      columns={columns}
      data={reportData}
      btnTitle="Download Report"
    />
  );
};

Report.layout = AdminLayout;

export default Report;
