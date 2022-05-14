import Pagination from './Pagination';
import { TableFilter } from './components';
import DatePicker from '../DatePicker';
import Dropdowns from '../Dropdowns';
// import locationData from '@/_mocks/locationData';
// import majorData from '@/_mocks/majorData';
import dayjs from 'dayjs';
import LocationIcon from '@/icons/Fill/Location.svg';
import MajorIcon from '@/icons/Fill/Major.svg';
import { dateFormat } from '@/utils/dateTimeConfig';
import useGetQuery from '@/hooks/useGetQuery';

const ListData = ({
  leftBtnDisabled,
  title,
  children,
  handleNext,
  handlePrev,
  handleSelectFilter,
}) => {
  const { data: locationData, isFetching: locationFetch } = useGetQuery(
    ['simple', 'location'],
    '/location/all',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );
  const { data: majorData, isFetching: majorFetch } = useGetQuery(
    ['simple', 'major'],
    '/program',
    {
      onSuccess: (res) => console.log('res123', res),
      onError: (err) => console.log('er123', er),
    }
  );

  return (
    <div className="rounded-5 shadow-sm py-10 px-12 bg-shade-FG">
      <h2 className="mb-2 text-lg-3 font-semibold text-primary-900">{title}</h2>

      <TableFilter hasSearch>
        <>
          <DatePicker
            handleSelectFilter={handleSelectFilter}
            placeholder={dayjs().format(dateFormat)}
          />
          <div>
            <Dropdowns
              placeholder="Location"
              Icon={LocationIcon}
              datas={locationData}
              loading={locationFetch}
              idItem="id_location"
              valueItem="name_location"
              handleSelectFilter={handleSelectFilter}
            />
          </div>
          <div>
            <Dropdowns
              placeholder="Major"
              Icon={MajorIcon}
              datas={majorData}
              loading={majorFetch}
              idItem="id_program"
              valueItem="program_name"
              handleSelectFilter={handleSelectFilter}
            />
          </div>
        </>
      </TableFilter>
      <div className="flex flex-1 flex-col">{children}</div>
      <Pagination
        isDisabled={leftBtnDisabled}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default ListData;
