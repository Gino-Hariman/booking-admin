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
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex },
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
    canPreviousPage,
    canNextPage,
    pageIndex,
    nextPage,
    previousPage,
  };
};

export default useTables;
