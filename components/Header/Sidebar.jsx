import { SidebarContent, SidebarHeader } from './components';
import LogoutIcon from '@/icons/Outline/Logout.svg';

const Sidebar = () => {
  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <div className="bg-shade-FG fixed z-50 flex flex-col top-nav left-0 w-14 hover:w-64 md:w-64 h-full text-white transition-all duration-300 border-none shadow sidebar">
      <SidebarHeader />

      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between grow ">
        <SidebarContent />
        <button
          class="mb-28 pl-5 hidden md:flex text-left text-xs"
          onClick={handleLogout}
        >
          <LogoutIcon className="w-6 h-6 mr-3" fill="#E92C2C" />
          <span className="font-semibold text-lg-1 text-danger-500">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
