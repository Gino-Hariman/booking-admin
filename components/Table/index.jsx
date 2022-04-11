import DatePicker from '../DatePicker';
import SearchBar from '../SearchBar';

const Table = ({ title }) => {
  return (
    <div className="rounded-5 shadow-sm py-10 px-12 bg-shade-FG">
      <h2 className="text-lg-3 font-semibold text-primary-900">{title}</h2>

      <div className="flex justify-between mt-4">
        <SearchBar placeholder="Search Student Name" />

        <div>
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default Table;
