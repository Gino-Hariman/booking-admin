import Pagination from './Pagination';
import { TableFilter } from './components';
import DatePicker from '../DatePicker';
import Dropdowns from '../Dropdowns';
import locationData from '@/_mocks/locationData';
import majorData from '@/_mocks/majorData';
import dayjs from 'dayjs';
import LocationIcon from '@/icons/Fill/Location.svg';
import MajorIcon from '@/icons/Fill/Major.svg';
import { dateFormat } from '@/utils/dateTimeConfig';

const ListData = ({ title, children, handleNext, handlePrev }) => {
  return (
    <div className="rounded-5 shadow-sm py-10 px-12 bg-shade-FG">
      <h2 className="mb-2 text-lg-3 font-semibold text-primary-900">{title}</h2>

      <TableFilter hasSearch>
        <>
          <DatePicker placeholder={dayjs().format(dateFormat)} />
          <div>
            <Dropdowns
              placeholder="Location"
              Icon={LocationIcon}
              datas={locationData}
            />
          </div>
          <div>
            <Dropdowns placeholder="Major" Icon={MajorIcon} datas={majorData} />
          </div>
        </>
      </TableFilter>
      <div className="flex flex-1 flex-col">{children}</div>
      <Pagination handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default ListData;
