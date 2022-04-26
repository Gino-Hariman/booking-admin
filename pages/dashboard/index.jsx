import ListData from '@/components/ListData';
import { useDashboardTab } from '@/context/DashboardTabContext';
import AdminLayout from '@/layout/AdminLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import { useEffect, useState } from 'react';
import * as DashboardTable from '../../components/Dashboard/index';

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const { selectedTab, handleSelectTab } = useDashboardTab();
  const Comp = DashboardTable[selectedTab.compName];
  useEffect(() => {
    setPage(0);
  }, [selectedTab]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  return (
    <DashboardLayout selectedItem={selectedTab} handleSelect={handleSelectTab}>
      <ListData
        title={selectedTab.title}
        handleNext={handleNext}
        handlePrev={handlePrev}
      >
        <Comp page={page} />
      </ListData>
    </DashboardLayout>
  );
};

Dashboard.layout = AdminLayout;

export default Dashboard;
