import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {coinActionCreator} from '../../module/coin';

const MoreCell = styled.td`
  span {
    cursor: pointer;
  }
`;

function More({colspan}) {
  const dispatch = useDispatch();
  const onClickMore = (e) => {
    dispatch(coinActionCreator.loadCoinMarketsMore());
  };
  return (
      <MoreCell colSpan={colspan}>
        <span onClick={onClickMore}>더보기</span>
      </MoreCell>
  );
}

export default More;
