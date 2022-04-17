import locationData from '@/_mocks/locationData';
import DatePicker from '../DatePicker';
import Dropdowns from '../Dropdowns';
import SearchBar from '../SearchBar';
import LocationIcon from '../../public/icons/Location.svg';
import MajorIcon from '../../public/icons/Major.svg';
import majorData from '@/_mocks/majorData';
import ListData from './ListData';
import Pagination from './Pagination';

const Table = ({ title }) => {
  return (
    <div className="rounded-5 shadow-sm py-10 px-12 bg-shade-FG">
      <h2 className="mb-2 text-lg-3 font-semibold text-primary-900">{title}</h2>

      <div className="flex justify-between xl:space-x-4 items-start xl:items-center space-y-2 flex-col xl:flex-row bg-warning-200 md:bg-danger-400 lg:bg-success-300 xl:bg-info-400 2xl:bg-primary-400">
        <SearchBar placeholder="Search Student Name" />

        <div className="flex h-full w-full flex-wrap xl:flex-nowrap xl:space-x-4 bg-shade-100 2xl:justify-end justify-between xl:mt-0 ">
          <DatePicker />
          <Dropdowns
            placeholder="Location"
            Icon={LocationIcon}
            datas={locationData}
          />
          <Dropdowns placeholder="Major" Icon={MajorIcon} datas={majorData} />
        </div>
      </div>
      <ListData />

      <Pagination />
    </div>
  );
};

export default Table;
