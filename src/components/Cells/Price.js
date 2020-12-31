import React from 'react';
import styled from 'styled-components';

const PriceCell = styled.td`
`;

function Price({prefix, price}) {
  return (
      <PriceCell>
        {`${prefix}${price ? price.toLocaleString(undefined, {maximumFractionDigits: 2}) : '-'}`}
      </PriceCell>
  );
}

export default Price;
