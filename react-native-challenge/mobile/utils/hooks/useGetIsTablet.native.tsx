import { Dimensions } from 'react-native';
import useMainDispatch from '@redux/hooks/useMainDispatch';
import { useEffect } from 'react';

const useGetIsTablet = () => {
  const { setIsTablet } = useMainDispatch();
  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    setIsTablet(height / width < 1.6);
  }, [])
};

export default useGetIsTablet;