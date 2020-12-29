import React from 'react';
import MoneyOption from '../Options/MoneyOption';
import styled from 'styled-components';
import Star from '../Icons/Star';

const BasicInfoBox = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin-left: 10px;
    margin-top: 20px;
  }
`;

const OptionBox = styled.div`
`;

function TitleInfo(props) {
  return (
      <BasicInfoBox>
        <TitleBox>
          <Star size="lg" checked/>
          <h1>비트코인</h1>
        </TitleBox>
        <OptionBox>
          <MoneyOption/>
        </OptionBox>
      </BasicInfoBox>
  );
}

export default TitleInfo;
