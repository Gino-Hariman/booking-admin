import Pagination from './Pagination';
import { TableFilter } from './components';

const ListData = ({ title, children }) => {
  return (
    <div className="rounded-5 shadow-sm py-10 px-12 bg-shade-FG">
      <h2 className="mb-2 text-lg-3 font-semibold text-primary-900">{title}</h2>

      <TableFilter />
      <div className="flex flex-1 flex-col">{children}</div>
      <Pagination />
    </div>
  );
};

export default ListData;
