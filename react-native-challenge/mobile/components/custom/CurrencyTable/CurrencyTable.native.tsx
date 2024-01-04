import React from 'react';
import Table from '@components/general/Table/Table.native';
import CurrencyTableItem from './CurrencyTableItem.native';
import useMainState from '@redux/hooks/useMainState';
import useFilterCurrencyTable from './hooks/useFilterCurrencyList.native';

const CurrencyTable = () => {
  const { filteredCurrencyData, isTablet } = useMainState();

  useFilterCurrencyTable();

  return (
    <Table
      data={filteredCurrencyData}
      numColumns={isTablet ? 2 : 1}
      renderItem={(item) => (
        <CurrencyTableItem
          testID={`currency-${item.item.id}`} 
          key={item.index}
          code={item.item.code} 
          name={item.item.name} 
        />
      )}
    />
  );
};

export default CurrencyTable;