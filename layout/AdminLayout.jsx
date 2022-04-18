import { Navbar, Sidebar } from '@/components/Header';
import { useDashboardTab } from '@/context/DashboardTabContext';
import DashboardLayout from './DashboardLayout';

const AdminLayout = ({ children }) => {
  const { selectedTab, handleSelectTab } = useDashboardTab();
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-shade-BG text-black">
      <Navbar />
      <Sidebar />
      <div className="h-full ml-14 mt-nav mb-10 md:ml-64">
        <DashboardLayout
          selectedItem={selectedTab}
          handleSelect={handleSelectTab}
        >
          {children}
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AdminLayout;
