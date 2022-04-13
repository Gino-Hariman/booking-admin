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

      <div className="flex justify-between items-center flex-wrap space-y-2 ">
        <SearchBar placeholder="Search Student Name" />

        <div className="flex lg:space-x-4 mt-2 xl:mt-0 flex-wrap">
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
