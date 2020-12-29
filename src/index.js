import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #1e1e1e;
  }

  a:link, a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

ReactDOM.render(
    <React.Fragment>
      <GlobalStyle/>
      <App/>
    </React.Fragment>,
    document.getElementById('root'),
);
