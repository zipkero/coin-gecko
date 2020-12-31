import React from 'react';
import styled, {css} from 'styled-components';

const PercentageCell = styled.td`
  ${props => props.figure > 0 && css`
    color: #e15241;
  `}
  ${props => props.figure < 0 && css`
    color: #3355ee;
  `}
`;

function Percentage({figure}) {
  return (
      <PercentageCell figure={figure}>
        {figure && `${figure.toFixed(2)}%`}
      </PercentageCell>
  );
}

export default Percentage;
