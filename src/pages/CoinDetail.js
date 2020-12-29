import React from 'react';
import Explain from '../components/Detail/Explain';
import Convert from '../components/Detail/Convert';
import TitleInfo from '../components/Detail/TitleInfo';
import CoinInfo from '../components/Detail/CoinInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const BackBox = styled.div`
  padding: 10px;
  width: 1000px;
`;

function CoinDetail(props) {
  return (
      <React.Fragment>
        <BackBox>
          <Link to="/"><FontAwesomeIcon icon={faArrowLeft} size="2x"/></Link>
        </BackBox>
        <TitleInfo/>
        <CoinInfo/>
        <Convert/>
        <Explain/>
      </React.Fragment>
  );
}

export default CoinDetail;