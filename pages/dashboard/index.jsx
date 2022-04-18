import Table from '@/components/Table';
import TableData from '@/components/Table/TableData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import AdminLayout from '@/layout/AdminLayout';
import studentRequest from '@/_mocks/studentRequest';

const Dashboard = () => {
  const { selectedTab } = useDashboardTab();
  return (
    <Table title={selectedTab}>
      {studentRequest.map((item) => (
        <TableData
          key={item.id}
          id={item.id}
          nim={item.nim}
          location={item.location}
          studentName={item.student_name}
          date={item.date}
          time={item.time}
          major={item.major}
          studentClass={item.kelas}
        />
      ))}
    </Table>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
