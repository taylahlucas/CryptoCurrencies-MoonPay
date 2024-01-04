import React from 'react';
import CurrencyList from '@components/custom/CurrencyList/CurrencyList.native';
import CurrencyListHeader from '@components/custom/CurrencyListHeader/CurrencyListHeader.native';
import useGetCurrencyList from '@components/custom/CurrencyList/hooks/useGetCurrencyList.native';
import useMainState from '@redux/hooks/useMainState';
import Condition from '@components/general/Condition.native';
import Loading from '@components/general/Loading/Loading.native';

const Currencies = () => {
  const { currencyData } = useMainState();

  useGetCurrencyList();

  return (
    <>
      <CurrencyListHeader />
      <Condition 
        condition={!!currencyData && currencyData.length > 0}
        conditionalElement={<Loading />}
      >
        <CurrencyList />
      </Condition>
    </>
  );
};

export default Currencies; 