import ListData from '@/components/ListData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import AdminLayout from '@/layout/AdminLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import * as DashboardTable from '../../components/Dashboard/index';

const Dashboard = () => {
  const { selectedTab, handleSelectTab } = useDashboardTab();
  const Comp = DashboardTable[selectedTab.compName];
  return (
    <DashboardLayout selectedItem={selectedTab} handleSelect={handleSelectTab}>
      <ListData title={selectedTab.title}>
        <Comp />
      </ListData>
    </DashboardLayout>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
