import { TabBarButton, TabBarButtonMobile } from '@/components/TabBar';
import tabBarConfig from '@/utils/tabBarConfig';

const DashboardLayout = ({ selectedItem, handleSelect, children }) => {
  return (
    // <div className="h-full xl:w-full xl:mx-0 hidden sm:block p-8">
    <div>
      <TabBarButtonMobile options={tabBarConfig} />
      <ul className="hidden z-50 lg:grid grid-cols-auto-fill auto-rows-auto-fill gap-4 mb-8">
        {tabBarConfig.map((item) => (
          <TabBarButton
            key={item.id}
            id={item.title}
            title={item.title}
            student={item.student}
            activeTab={selectedItem.title}
            Icon={item.icon}
            onClick={() =>
              handleSelect({ title: item.title, compName: item.compName })
            }
          />
        ))}
      </ul>
      <div className=" ">{children}</div>
    </div>

    // </div>
  );
};

export default DashboardLayout;
