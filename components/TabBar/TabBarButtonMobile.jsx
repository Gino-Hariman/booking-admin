import { useDashboardTab } from '@/context/DashboardTabContext';
import tabBarConfig from '@/utils/tabBarConfig';

const TabBarButtonMobile = ({ options }) => {
  const { handleSelectTab } = useDashboardTab();
  const handleChange = (e) => {
    const position = e.target.value;
    handleSelectTab({
      title: tabBarConfig[position]['title'],
      compName: tabBarConfig[position]['compName'],
    });
  };

  return (
    <div className="lg:hidden relative w-full mx-auto mb-6 bg-white ">
      <div className="absolute inset-0 m-auto z-0 w-6 h-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-selector"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#A0AEC0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="8 9 12 5 16 9" />
          <polyline points="16 15 12 19 8 15" />
        </svg>
      </div>
      <select
        onChange={handleChange}
        onClick={() => console.log('sadfsdaf')}
        aria-label="Selected tab"
        className="form-select block w-full p-3 border rounded-2 overflow-hidden border-gray-300 text-gray-600 appearance-none bg-transparent relative z-10"
      >
        {options.map((item, index) => (
          <option
            key={item.id}
            id={item.id}
            value={index}
            className="text-sm text-gray-600"
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TabBarButtonMobile;
