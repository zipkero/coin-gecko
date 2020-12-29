import React from 'react';
import styled from 'styled-components';

const CoinInfoBox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
`;

const BasicInfoBox = styled.div`
  width: 50%;
`;

const PriceInfoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const CurrentPriceInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CurrentPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CurrentRateBox = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TranPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const TotalAmountBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PriceBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TitleBox = styled.span`
  display: block;
`;

const TotalPriceBox = styled.span`
  display: block;
`;

function CoinInfo(props) {
  return (
      <CoinInfoBox>
        <BasicInfoBox>
          <div>
            <span>시가총액 Rank</span>
            <span>Rank#1</span>
          </div>
          <div>
            <span>웹사이트</span>
            <span>bitcoin.org</span>
          </div>
        </BasicInfoBox>
        <PriceInfoBox>
          <CurrentPriceInfoBox>
            <CurrentPriceBox>
              <span>₩32.177.32</span>
              <span>1.000000000BTC</span>
            </CurrentPriceBox>
            <CurrentRateBox>
              <span>0.8%</span>
              <span>0.1%</span>
            </CurrentRateBox>
          </CurrentPriceInfoBox>
          <TranPriceBox>
            <TotalAmountBox>
              <TitleBox>시가총액</TitleBox>
              <TotalPriceBox>₩392.913.934.304.334</TotalPriceBox>
            </TotalAmountBox>
            <PriceBox>
              <TitleBox>24시간 거래대금</TitleBox>
              <TotalPriceBox>₩23.392.913.934.304.334</TotalPriceBox>
            </PriceBox>
          </TranPriceBox>
        </PriceInfoBox>
      </CoinInfoBox>
  );
}

export default CoinInfo;