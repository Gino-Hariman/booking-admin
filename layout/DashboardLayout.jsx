import { LoadingSpinner } from '@/components/Loading';
import { TabBarButton, TabBarButtonMobile } from '@/components/TabBar';
import useGetQuery from '@/hooks/useGetQuery';
import tabBarConfig from '@/utils/tabBarConfig';

const DashboardLayout = ({ selectedItem, handleSelect, children }) => {
  const { data, isFetching } = useGetQuery(
    ['book', 'count'],
    '/book/count?order_status=pending'
  );

  return (
    <div>
      <TabBarButtonMobile options={tabBarConfig} />
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <ul className="hidden z-50 lg:grid grid-cols-auto-fill auto-rows-auto-fill gap-4 mb-8">
          {tabBarConfig.map((item) => (
            <TabBarButton
              key={item.count_id}
              id={item.title}
              title={item.title}
              student={data[item.count_id]}
              activeTab={selectedItem.title}
              Icon={item.icon}
              onClick={() => {
                handleSelect({ title: item.title, compName: item.compName });
              }}
            />
          ))}
        </ul>
      )}

      <div className=" ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
