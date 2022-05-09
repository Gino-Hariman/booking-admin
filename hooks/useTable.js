import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

const useTables = (columns, data) => {
  const handleChangeStatus = () => {
    console.log('changed12');
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
  } = useTable(
    {
      columns: columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination, // new,
    handleChangeStatus
  );

  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  };
};

export default useTables;
