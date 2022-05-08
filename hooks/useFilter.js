import React, { useState } from 'react';

const useFilter = () => {
  const [rowsPerPage, setRowPerPage] = useState(3);
  const [searched, setSearched] = useState('');
  const [order, setOrder] = useState();
  const [page, setPage] = useState(0);

  const requestSearch = (event) => {
    setSearched(event.target.value);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page === 0) return;
    setPage((prev) => prev - 1);
  };

  return {
    searched,
    requestSearch,
    page,
    handleNextPage,
    handlePrevPage,
  };
};

export default useFilter;
