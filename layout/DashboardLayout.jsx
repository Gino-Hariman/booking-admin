import { TabBarButton, TabBarButtonMobile } from '@/components/TabBar';
import tabBarConfig from '@/utils/tabBarConfig';

const DashboardLayout = ({ selectedItem, handleSelect, children }) => {
  return (
    <div className="h-full xl:w-full xl:mx-0 hidden sm:block p-8">
      <TabBarButtonMobile options={tabBarConfig} />
      <ul className="hidden lg:grid grid-cols-auto-fill auto-rows-auto-fill gap-4 mb-8">
        {tabBarConfig.map((item) => (
          <TabBarButton
            key={item.id}
            id={item.title}
            title={item.title}
            student={item.student}
            activeTab={selectedItem}
            onClick={() => handleSelect(item.title)}
          />
        ))}
      </ul>
      {children}
    </div>
  );
};

export default DashboardLayout;
