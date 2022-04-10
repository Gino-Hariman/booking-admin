import { Navbar, Sidebar } from '@/components/Header';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-shade-BG text-black">
      <Navbar />
      <Sidebar />
      <div className=" h-full ml-14 mt-nav mb-10 md:ml-64">{children}</div>
    </div>
  );
};

export default DashboardLayout;
