import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './TableStyles.native';

interface TableProps {
  data: any[];
  renderItem: (item: any) => JSX.Element;  
  numColumns: number;
}

const Table = ({ data, renderItem, numColumns = 1 }: TableProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.tableContainer}
      horizontal={false}
      numColumns={numColumns}
    />
  );
};

export default Table;