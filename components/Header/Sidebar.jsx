import sidebarConfig from '@/utils/sidebarConfig';
import { NavItem, SidebarContent, SidebarHeader } from './components';

const Sidebar = () => {
  return (
    <div className="bg-shade-FG fixed flex flex-col top-nav left-0 w-14 hover:w-64 md:w-64 bg-blue-900 h-full text-white transition-all duration-300 border-none z-10 shadow sidebar">
      <SidebarHeader />

      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between grow ">
        <SidebarContent />
        <p class="mb-14 px-5 py-3 hidden md:block text-xs">Copyright @2021</p>
      </div>
    </div>
  );
};

export default Sidebar;
