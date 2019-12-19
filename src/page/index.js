import React from 'react';
import LeftStrip from '../components/left-strip';
import {
  Container,
  ContinerTitle,
  TitleName,
  ContinerInformation,
} from './styles'
import ContainerInformationUser from '../components/information-content';

function index() {
  return (
    <Container>
      <ContinerTitle>
        <TitleName>Edison jordan alba sarmiento</TitleName>
      </ContinerTitle>
      <LeftStrip/>
      <ContinerInformation>
        <TitleName>Edison jordan alba sarmiento</TitleName>
      <ContainerInformationUser>
        <p>sssdds</p>
      </ContainerInformationUser>
      <ContainerInformationUser>
      <p>AAAAAA</p>
      </ContainerInformationUser>
      <ContainerInformationUser />
      </ContinerInformation>
    </Container>
  );
}

export default index;
