import DatePicker from '@/components/DatePicker';
import Dropdowns from '@/components/Dropdowns';
import SearchBar from '@/components/SearchBar';
import locationData from '@/_mocks/locationData';
import LocationIcon from '@/icons/Fill/Location.svg';
import MajorIcon from '@/icons/Fill/Major.svg';
import majorData from '@/_mocks/majorData';
import dayjs from 'dayjs';
import { dateFormat } from '@/utils/dateTimeConfig';

const TableFilter = ({ hasSearch, children }) => {
  return (
    <div className="flex justify-between xl:space-x-4 items-start xl:items-center space-y-2 xl:space-y-0 flex-col xl:flex-row">
      {hasSearch && <SearchBar placeholder="Search Student Name" />}
      <div className="flex h-full w-full flex-wrap xl:flex-nowrap xl:space-x-4 2xl:justify-end justify-between xl:mt-0 ">
        {children}
        {/* <DatePicker placeholder={dayjs().format(dateFormat)} />
        <div>
          <Dropdowns
            placeholder="Location"
            Icon={LocationIcon}
            datas={locationData}
          />
        </div>
        <div>
          <Dropdowns placeholder="Major" Icon={MajorIcon} datas={majorData} />
        </div> */}
      </div>
    </div>
  );
};

export default TableFilter;
