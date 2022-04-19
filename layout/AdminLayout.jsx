import { Navbar, Sidebar } from '@/components/Header';
import { useDashboardTab } from '@/context/DashboardTabContext';
import DashboardLayout from './DashboardLayout';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-shade-BG text-black">
      <Navbar />
      <Sidebar />
      {/* <DashboardLayout
          selectedItem={selectedTab}
          handleSelect={handleSelectTab}
        > */}
      <div className="h-full ml-14 mt-nav mb-10 md:ml-64">{children}</div>
      {/* </DashboardLayout> */}
    </div>
  );
};

export default AdminLayout;
