import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

const NavLayer = styled.nav`
  min-width: 1000px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
`;

const NavTabBox = styled.ul`
  width: 1000px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 50px;
`;

const NavTabItemBox = styled.li`
  width: 50%;
  height: 50px;
  background-color: #e1e1e1;
  font-size: 20px;
  font-weight: bold;
  color: #6e6e6e;

  ${(props) =>
          props.active &&
          css`
            color: #111;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 0 1px 1px #e1e1e1;
          `}
`;

function Navigation({tabId = 'coin'}) {
  const i = 0;
  return (
      <NavLayer>
        <NavTabBox>
          <NavTabItemBox active={tabId === 'coin'}>
            <Link to="/">가상자산 시세목록</Link>
          </NavTabItemBox>
          <NavTabItemBox active={tabId === 'bookmark'}>
            <Link to="/bookmark">북마크 목록</Link>
          </NavTabItemBox>
        </NavTabBox>
      </NavLayer>
  );
}

export default Navigation;
