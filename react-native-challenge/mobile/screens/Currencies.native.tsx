import React from 'react';
import useMainState from '@redux/hooks/useMainState';
import Condition from '@components/general/Condition.native';
import Loading from '@components/general/Loading/Loading.native';
import CurrencyTable from '@components/custom/CurrencyTable/CurrencyTable.native';
import useGetIsTablet from '@utils/hooks/useGetIsTablet.native';
import useGetCurrencyTable from '@components/custom/CurrencyTable/hooks/useGetCurrencyList.native';
import CurrencyTableHeader from '@components/custom/CurrencyTableHeader/CurrencyTableHeader.native';

const Currencies = () => {
  const { currencyData } = useMainState();

  useGetCurrencyTable();
  useGetIsTablet();

  return (
    <>
      <CurrencyTableHeader />
      <Condition 
        condition={!!currencyData && currencyData.length > 0}
        conditionalElement={<Loading />}
      >
        <CurrencyTable />
      </Condition>
    </>
  );
};

export default Currencies; 