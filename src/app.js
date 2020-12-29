import React from 'react';
import styled from 'styled-components';
import Router from './Router';

const Wrapper = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
      <Wrapper>
        <Router/>
      </Wrapper>
  );
}

export default App;
