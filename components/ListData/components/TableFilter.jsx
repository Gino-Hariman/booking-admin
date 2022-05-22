import SearchBar from '@/components/SearchBar';

const TableFilter = ({ hasSearch, requestSearch, children }) => {
  return (
    <div className="flex justify-between xl:space-x-4 items-start xl:items-center space-y-2 xl:space-y-0 flex-col xl:flex-row">
      {hasSearch && (
        <SearchBar
          requestSearch={requestSearch}
          placeholder="Search Student Name"
        />
      )}
      <div className="flex h-full w-full flex-wrap xl:flex-nowrap xl:space-x-4 2xl:justify-end justify-between xl:mt-0 ">
        {children}
      </div>
    </div>
  );
};

export default TableFilter;
