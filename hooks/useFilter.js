import { useDashboardTab } from '@/context/DashboardTabContext';
import { useState, useEffect } from 'react';

const useFilter = () => {
  const [rowsPerPage, setRowPerPage] = useState(3);
  const [searched, setSearched] = useState('');
  const [order, setOrder] = useState();
  const [filterState, setFilterState] = useState({ page: 0 });
  const { selectedTab } = useDashboardTab();

  useEffect(() => {
    setFilterState({ page: 0 });
  }, [selectedTab.title, Object.keys(filterState).length]);

  const requestSearch = (event) => {
    setSearched(event.target.value);
  };
  const handleNextPage = () => {
    handleSelectFilter('page', (filterState.page += 1));
  };

  const handlePrevPage = () => {
    if (filterState.page === 0) return;
    handleSelectFilter('page', (filterState.page -= 1));
  };

  const handleSelectFilter = (id, value) => {
    setFilterState((prev) => ({ ...prev, [id]: value }));
  };

  return {
    filterState,
    searched,
    requestSearch,
    handleNextPage,
    handlePrevPage,
    handleSelectFilter,
  };
};

export default useFilter;
