import React from 'react';
import LeftStrip from '../components/left-strip';
import {
  Container,
  ContinerTitle,
  TitleName,
  ContinerInformation,
} from './styles'

function index() {
  return (
    <Container>
      <ContinerTitle>
        <TitleName>Edison jordan alba sarmiento</TitleName>
      </ContinerTitle>
      <LeftStrip/>
      <ContinerInformation>
        <TitleName>Edison jordan alba sarmiento</TitleName>

      </ContinerInformation>
    </Container>
  );
}

export default index;
