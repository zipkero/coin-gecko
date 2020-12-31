import React from 'react';
import styled from 'styled-components';
import Router from './router';
import {Provider} from 'react-redux';
import store from './module';

const Wrapper = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
      <Provider store={store}>
        <Wrapper>
          <Router/>
        </Wrapper>
      </Provider>
  );
}

export default App;
