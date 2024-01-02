import React from 'react';
import useMainState from '../../../redux/hooks/useMainState';
import { CurrencyItem } from '../../../utils/CustomInterfaces';
import ScrollableList from '../../general/ScrollableList/ScrollableList.native';
import CurrencyListItem from './CurrencyListItem.native';
import { styles } from './CurrencyListStyles.native';
import useFilterCurrencyList from './hooks/useFilterCurrencyList.native';

const CurrencyList = () => {
  const { filteredCurrencyData } = useMainState();

  useFilterCurrencyList();

  return (
    <ScrollableList customStyle={styles.currencyList}>
      {filteredCurrencyData.map((item: CurrencyItem, index) => (
        <CurrencyListItem 
          key={index}
          code={item.code} 
          name={item.name} 
         />
      ))}
    </ScrollableList>
  );
};

export default CurrencyList;