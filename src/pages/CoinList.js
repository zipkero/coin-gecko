import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import ListTypeOption from '../components/Options/ListTypeOption';
import MoneyOption from '../components/Options/MoneyOption';
import PageSizeOption from '../components/Options/PageSizeOption';
import CoinTable from '../components/List/CoinTable';
import Loading from '../components/Loading';
import {useSelector} from 'react-redux';

const ContentLayer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionWrapper = styled.div`
  width: 1000px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const SectionLayer = styled.section`
  width: 1000px;
`;

function CoinList() {
  const {loadCoinMarketsRequest, loadCoinMarketsMoreRequest} = useSelector(state => state.coin);
  return (
      <React.Fragment>
        <Navigation/>
        <ContentLayer>
          <OptionWrapper>
            <ListTypeOption/>
            <MoneyOption/>
            <PageSizeOption/>
          </OptionWrapper>
          <SectionLayer>
            <CoinTable/>
          </SectionLayer>
        </ContentLayer>
        {loadCoinMarketsRequest && <Loading/>}
        {loadCoinMarketsMoreRequest && <Loading/>}
      </React.Fragment>
  );
}

export default CoinList;
