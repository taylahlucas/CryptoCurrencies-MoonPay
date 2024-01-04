import { useEffect } from 'react';
import useMainDispatch from '@redux/hooks/useMainDispatch';
import useMainState from '@redux/hooks/useMainState';

const useFilterCurrencyTable = () => {
  const { setFilteredCurrencyData } = useMainDispatch();
  const { filteredCurrencyData, currencyData, filterOptions, sortOptions } = useMainState();

  useEffect(() => {
    if (!!filterOptions) {
      setFilteredCurrencyData(currencyData.filter(item => 
        item.supportedInTest === filterOptions.supportedInTest && item.supportedInUS === filterOptions.supportedInUS
      ));
    }
  }, [filterOptions]);

  useEffect(() => {
    // Only one option can be 'ascend' or 'descend' at any one time
    if (sortOptions.code !== 'none') {
      switch (sortOptions.code) {
        case 'ascend':
          setFilteredCurrencyData([...filteredCurrencyData].sort((a, b) => a.code.localeCompare(b.code)));
          return;
        case 'descend':
          setFilteredCurrencyData([...filteredCurrencyData].sort((a, b) => a.code.localeCompare(b.code)).reverse());
          return;
      }
    }
    else if (sortOptions.name !== 'none') {
      switch (sortOptions.name) {
        case 'ascend':
          setFilteredCurrencyData([...filteredCurrencyData].sort((a, b) => a.name.localeCompare(b.name)));
          return;
        case 'descend':
          setFilteredCurrencyData([...filteredCurrencyData].sort((a, b) => a.name.localeCompare(b.name)).reverse());
          return;
      }
    }
  }, [sortOptions]);
};

export default useFilterCurrencyTable;