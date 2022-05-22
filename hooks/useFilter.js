import { useDashboardTab } from '@/context/DashboardTabContext';
import { useState, useEffect } from 'react';

const useFilter = () => {
  const [rowsPerPage, setRowPerPage] = useState(3);
  const [searched, setSearched] = useState('');
  const [order, setOrder] = useState();
  const [filterState, setFilterState] = useState({ page: 0 });
  const { selectedTab } = useDashboardTab();

  // for search
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  // update 'term' value after 1 second from the last update of 'debouncedTerm'
  useEffect(() => {
    const timer = setTimeout(() => {
      setTerm(debouncedTerm);
      setFilterState((prev) => ({ ...prev, page: 0, student: debouncedTerm }));
      console.log('lol');
    }, 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    setFilterState({ page: 0 });
  }, [selectedTab.title]);

  const requestSearch = (event) => {
    // setFilterState((prev) => ({ ...prev, student: event.target.value }));
    setDebouncedTerm(event.target.value);
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
    searched,
    requestSearch,
    handleNextPage,
    handlePrevPage,
    handleSelectFilter,
  };
};

export default useFilter;
