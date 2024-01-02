import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { TextType } from '../../../utils/CustomTypes';
import useGetTextStyle from './hooks/useGetTextStyle.native';

interface TextInterface {
  title: string;
  type?: TextType;
  numberOfLines?: number;
  style?: TextStyle;
}

const Text = ({ title, type = 'standard', numberOfLines = 0, style }: TextInterface) => {
  const { getTextStyle } = useGetTextStyle();
  
  return (
    <RNText 
      style={{ ...getTextStyle(type), ...style }}
      
      numberOfLines={numberOfLines}
    >
      {title}
    </RNText>
  );
};

export default Text;