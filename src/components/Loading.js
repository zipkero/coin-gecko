import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6e6e6e;
  opacity: 0.5;
`;

function Loading() {
  return (
      <LoadingBox>
        <FontAwesomeIcon icon={faSpinner} spin size="7x"/>
      </LoadingBox>
  );
}

export default Loading;