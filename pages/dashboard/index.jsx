import ListData from '@/components/ListData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import useFilter from '@/hooks/useFilter';
import AdminLayout from '@/layout/AdminLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import * as DashboardTable from '../../components/Dashboard/index';

const Dashboard = () => {
  const { selectedTab, handleSelectTab } = useDashboardTab();
  const Comp = DashboardTable[selectedTab.compName];

  const { handleNextPage, handlePrevPage, filterState, handleSelectFilter } =
    useFilter();

  return (
    <DashboardLayout selectedItem={selectedTab} handleSelect={handleSelectTab}>
      <ListData
        title={selectedTab.title}
        handleNext={handleNextPage}
        handlePrev={handlePrevPage}
        leftBtnDisabled={filterState.page === 0}
        filterState={filterState}
        handleSelectFilter={handleSelectFilter}
      >
        <Comp filterState={filterState} />
      </ListData>
    </DashboardLayout>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
