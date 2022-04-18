import DatePicker from '@/components/DatePicker';
import Dropdowns from '@/components/Dropdowns';
import SearchBar from '@/components/SearchBar';
import LocationIcon from '@/icons/Fill/Location.svg';
import locationData from '@/_mocks/locationData';
import MajorIcon from '@/icons/Fill/Major.svg';
import majorData from '@/_mocks/majorData';

const TableFilter = () => {
  return (
    <div className="flex justify-between xl:space-x-4 items-start xl:items-center space-y-2 xl:space-y-0 flex-col xl:flex-row">
      <SearchBar placeholder="Search Student Name" />
      <div className="flex h-full w-full flex-wrap xl:flex-nowrap xl:space-x-4 2xl:justify-end justify-between xl:mt-0 ">
        <DatePicker />
        <Dropdowns
          placeholder="Location"
          Icon={LocationIcon}
          datas={locationData}
        />
        <Dropdowns placeholder="Major" Icon={MajorIcon} datas={majorData} />
      </div>
    </div>
  );
};

export default TableFilter;
