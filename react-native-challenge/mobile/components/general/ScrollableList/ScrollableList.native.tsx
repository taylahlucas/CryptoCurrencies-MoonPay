import { ScrollView } from 'react-native';
import { styles } from './ScrollableListStyles.native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
  customStyle?: any;
  contentContainerStyle?: any;
};

const ScrollableList = ({
  children,
  customStyle,
  contentContainerStyle
}: CustomListProps) => {
  return (
    <ScrollView
      contentContainerStyle={{ ...styles.scrollableContent, ...contentContainerStyle }}
      style={{ ...styles.scrollableList, ...customStyle }}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableList;