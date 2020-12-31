import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TitleCell = styled.td`
  font-weight: bold;
`;

function Title({title, to}) {
  return (
      <TitleCell>
        <Link to={to}>{title}</Link>
      </TitleCell>
  );
}

export default Title;
