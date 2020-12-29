import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExchangeAlt} from '@fortawesome/free-solid-svg-icons';

const ConvertLayer = styled.div`
  width: 1000px;
  background-color: #9e9e9e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  .calc_title {
    font-size: 20px;
  }
`;

const CalcBox = styled.div`
  margin: 20px 0;
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 200px;
    height: 50px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e7e7e7;
  }
`;

const CoinTitle = styled.span`
  width: 50px;
  height: 50px;
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  text-align: center;
  box-sizing: border-box;
  line-height: 50px;
`;

function Convert(props) {
  return (
      <ConvertLayer>
        <span className="calc_title">가격 계산</span>
        <CalcBox>
          <CoinTitle>BTC</CoinTitle>
          <input type="number"/>
          <FontAwesomeIcon icon={faExchangeAlt} size="2x" style={{
            margin: '0 10px',
            cursor: 'pointer',
          }}/>
          <CoinTitle>KRW</CoinTitle>
          <input type="number"/>
        </CalcBox>
      </ConvertLayer>
  );
}

export default Convert;