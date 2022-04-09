import sidebarConfig from '@/utils/sidebarConfig';
import NavItem from './NavItem';

const SidebarContent = () => {
  return (
    <ul class="flex flex-col py-4">
      <li class="px-5 hidden md:block">
        <div class="flex flex-row items-center h-8">
          <div class="text-caption font-medium tracking-wide text-shade-40 uppercase">
            Menu
          </div>
        </div>
      </li>

      {sidebarConfig.map((item) => (
        <NavItem key={item.id} title={item.title} icon={item.icon} />
      ))}
    </ul>
  );
};

export default SidebarContent;
