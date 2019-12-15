import React from 'react';
import LeftStrip from '../components/left-strip';
import {
  Container,
  ContinerTitle,
} from './styles'

function index() {
  return (
    <Container>
      <ContinerTitle>
        <h1>EDISO</h1>
      </ContinerTitle>
      <LeftStrip/>
    </Container>
  );
}

export default index;
