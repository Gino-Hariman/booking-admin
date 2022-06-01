import { useDashboardTab } from '@/context/DashboardTabContext';
import { useState, useEffect } from 'react';

const useFilter = () => {
  const [rowsPerPage, setRowPerPage] = useState(3);
  const [order, setOrder] = useState();
  const [filterState, setFilterState] = useState({ page: 0 });
  const { selectedTab } = useDashboardTab();

  const [searchValue, setSearchValue] = useState('');

  const [debouncedValue, setDebouncedValue] = useState(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, 800]);

  useEffect(() => {
    setFilterState((prev) => ({ ...prev, page: 0, student: debouncedValue }));
  }, [debouncedValue]);

  useEffect(() => {
    setFilterState({ page: 0 });
  }, [selectedTab.title]);

  const requestSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const handleNextPage = () => {
    handleSelectFilter('page', (filterState.page += 1));
  };

  const handlePrevPage = () => {
    if (filterState.page === 0) return;
    handleSelectFilter('page', (filterState.page -= 1));
  };

  const handleSelectFilter = (id, value) => {
    setFilterState((prev) => ({ ...prev, page: 0, [id]: value }));
  };

  return {
    filterState,
    searched: debouncedValue,
    requestSearch,
    handleNextPage,
    handlePrevPage,
    handleSelectFilter,
  };
};

export default useFilter;
