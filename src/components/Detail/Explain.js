import React from 'react';
import styled from 'styled-components';

const ExplainBox = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 10px 0;
  }
`;

const ExplainContentBox = styled.div`
  box-sizing: border-box;
  width: 1000px;
  padding: 10px;
  border-top: 1px solid #1e1e1e;
`;

function Explain() {
  return (
      <ExplainBox>
        <span>설명보기</span>
        <ExplainContentBox>
          가나다라바사
        </ExplainContentBox>
      </ExplainBox>
  );
}

export default Explain;
