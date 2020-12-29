import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import ListOption from '../components/Options/ListOption';
import MoneyOption from '../components/Options/MoneyOption';
import PageSizeOption from '../components/Options/PageSizeOption';
import Star from '../components/Icons/Star';

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

  table {
    width: 1000px;
    text-align: center;
    border-collapse: collapse;
  }

  th {
    height: 40px;
    border-bottom: 2px solid #e1e1e1;
  }

  td {
    height: 40px;
    border-bottom: 1px solid #e1e1e1;
  }
`;

function CoinList(props) {
  return (
      <React.Fragment>
        <Navigation/>
        <ContentLayer>
          <OptionWrapper>
            <ListOption/>
            <MoneyOption/>
            <PageSizeOption/>
          </OptionWrapper>
          <SectionLayer>
            <table>
              <colgroup>
                <col width="20px"/>
                <col/>
                <col width="100px"/>
                <col/>
                <col width="70px"/>
                <col width="70px"/>
                <col width="70px"/>
                <col/>
              </colgroup>
              <thead>
              <tr>
                <th colSpan="3">자산</th>
                <th>시세</th>
                <th>1시간</th>
                <th>24시간</th>
                <th>7일</th>
                <th>24시간 거래대금</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <Star checked={true} size="1x"/>
                </td>
                <td>리플</td>
                <td>XRP</td>
                <td>2123123</td>
                <td>111</td>
                <td>222</td>
                <td>333</td>
                <td>12312312123</td>
              </tr>
              <tr>
                <td>
                  <Star checked={false} size="1x"/>
                </td>
                <td>리플</td>
                <td>XRP</td>
                <td>2123123</td>
                <td>111</td>
                <td>222</td>
                <td>333</td>
                <td>12312312123</td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colSpan="8">더보기</td>
              </tr>
              </tfoot>
            </table>
          </SectionLayer>
        </ContentLayer>
      </React.Fragment>
  );
}

export default CoinList;
