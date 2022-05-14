import React, { useState } from 'react';

const useFilter = () => {
  const [rowsPerPage, setRowPerPage] = useState(3);
  const [searched, setSearched] = useState('');
  const [order, setOrder] = useState();
  const [page, setPage] = useState(0);
  const [filterState, setFilterState] = useState({ page: 0 });

  const requestSearch = (event) => {
    setSearched(event.target.value);
  };

  const handleNextPage = () => {
    // setPage((prev) => prev + 1);
    handleSelectFilter('page', (filterState.page += 1));
  };

  const handlePrevPage = () => {
    if (filterState.page === 0) return;
    // setPage((prev) => prev - 1);
    handleSelectFilter('page', (filterState.page -= 1));
  };

  console.log('page', page, filterState);

  const handleSelectFilter = (id, value) => {
    setFilterState((prev) => ({ ...prev, [id]: value }));
  };

  return {
    filterState,
    searched,
    requestSearch,
    page,
    handleNextPage,
    handlePrevPage,
    handleSelectFilter,
  };
};

export default useFilter;
