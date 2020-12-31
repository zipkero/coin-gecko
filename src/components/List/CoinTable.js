import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {coinActionCreator} from '../../module/coin';
import More from '../Cells/More';
import CoinRow from './CoinRow';

const TableBox = styled.table`
  width: 1000px;
  text-align: center;
  border-collapse: collapse;

  th {
    height: 40px;
    border-bottom: 2px solid #e1e1e1;
  }

  td {
    height: 40px;
    border-bottom: 1px solid #e1e1e1;

    img {
      vertical-align: middle;
    }
  }

  td:nth-child(3) {
    text-align: left;
  }
`;

function CoinTable() {
  const [coins, {pageSize, currency}] = useSelector(state => [state.coin.coins, state.coin.listOption]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinActionCreator.loadCoinMarkets());
  }, [pageSize, currency]);

  return (
      <TableBox>
        <colgroup>
          <col width="30px"/>
          <col width="50px"/>
          <col width="120px"/>
          <col width="100px"/>
          <col width="200px"/>
          <col width="80px"/>
          <col width="80px"/>
          <col width="80px"/>
          <col/>
        </colgroup>
        <thead>
        <tr>
          <th colSpan="4">자산</th>
          <th>시세</th>
          <th>1시간</th>
          <th>24시간</th>
          <th>7일</th>
          <th>24시간 거래대금</th>
        </tr>
        </thead>
        <tbody>
        {coins.map(coin => (
            <CoinRow key={coin.id} coin={coin} currency={currency}/>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <More colspan="9"/>
        </tr>
        </tfoot>
      </TableBox>
  );
}

export default CoinTable;