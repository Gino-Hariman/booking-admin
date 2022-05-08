import ListData from '@/components/ListData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import useFilter from '@/hooks/useFilter';
import AdminLayout from '@/layout/AdminLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import * as DashboardTable from '../../components/Dashboard/index';

const Dashboard = () => {
  const { selectedTab, handleSelectTab } = useDashboardTab();
  const Comp = DashboardTable[selectedTab.compName];
  const { page, handleNextPage, handlePrevPage } = useFilter();

  return (
    <DashboardLayout selectedItem={selectedTab} handleSelect={handleSelectTab}>
      <ListData
        title={selectedTab.title}
        handleNext={handleNextPage}
        handlePrev={handlePrevPage}
        leftBtnDisabled={page === 0}
      >
        <Comp page={page} />
      </ListData>
    </DashboardLayout>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
