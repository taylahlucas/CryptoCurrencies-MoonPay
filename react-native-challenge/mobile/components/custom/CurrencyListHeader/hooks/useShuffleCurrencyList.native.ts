import useMainDispatch from '@redux/hooks/useMainDispatch';
import useMainState from '@redux/hooks/useMainState';


const useShuffleCurrencyList = () => {
  const { setFilteredCurrencyData } = useMainDispatch();
  const { filteredCurrencyData } = useMainState();

  const shuffleCurrencyList = () => {
    const updatedCurrencyData = [...filteredCurrencyData];

    updatedCurrencyData.forEach((item, index) => {
      const randomIndex = Math.floor(Math.random() * index + 1);

      const temp = updatedCurrencyData[index];
      updatedCurrencyData[index] = updatedCurrencyData[randomIndex];
      updatedCurrencyData[randomIndex] = temp;
    });

    setFilteredCurrencyData(updatedCurrencyData);
  };

  return { shuffleCurrencyList };
};

export default useShuffleCurrencyList;
