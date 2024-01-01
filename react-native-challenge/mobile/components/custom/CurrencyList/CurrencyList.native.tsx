import React from 'react';
import { CurrencyItem } from '../../../utils/CustomInterfaces';
import ScrollableList from '../../general/ScrollableList/ScrollableList.native';
import CurrencyListItem from './CurrencyListItem.native';
import { styles } from './CurrencyListStyles.native';

interface CurrencyListProps {
  data: CurrencyItem[];
}

const CurrencyList = ({ data }: CurrencyListProps) => {
  return (
    <ScrollableList customStyle={styles.currencyList}>
      {data.map((item: CurrencyItem, index) => (
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