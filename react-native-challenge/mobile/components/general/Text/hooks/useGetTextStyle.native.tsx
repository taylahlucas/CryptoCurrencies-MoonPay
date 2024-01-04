import { textStyles } from '@styles/global';
import { TextType } from '@utils/CustomTypes';

const useGetTextStyle = () => {
  const getTextStyle = (style: TextType) => {
    switch (style) {
      case 'standard':
        return textStyles.standardText;
      case 'bold':
        return textStyles.boldText;
    }
  };

  return { getTextStyle };
};

export default useGetTextStyle;