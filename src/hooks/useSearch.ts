import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export const useSearch = (searchTerm: string) => {
  const [searchValue, setSearchValue] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(searchValue, 300);

  useEffect(() => {
    setSearchValue(searchTerm);
  }, [searchTerm]);

  return debouncedSearchTerm;
};
