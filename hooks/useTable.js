import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

const useTables = (columns, data) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
  } = useTable(
    {
      columns: columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new,
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
