import React from 'react';
import LeftStrip from '../components/left-strip';
import {
  Container,
  ContinerTitle,
  TitleName,
  ContinerInformation,
  ContainerText,
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
        <ContainerInformationUser title='Abut me' icon='NAME'>
          <ContainerText>
          sssdsssddssssddssssddssssddssssddssssddssssddssssddssssddssssddssssddss
          ssddsdssssddssssddssssddssssddssssddssssddssssddssssddssssddssssddssssdds
          sssddssssddssssddssssddssssddssssddssssddssssddssssddssssddssssddssssdds
          </ContainerText>
        </ContainerInformationUser>
        <ContainerInformationUser title='Abut me 2' icon='NAME 2'>
        <h4>2018 - 2019</h4>
        <p>TESTEST</p>
        <p>TESTEST TESTEST TESTEST TESTEST TESTEST</p>
        </ContainerInformationUser>
        <ContainerInformationUser title='Abut me 3' icon='NAME 3'>
          <h4>2018 - 2019</h4>
          <p>TESTEST</p>
          <p>TESTEST TESTEST TESTEST TESTEST TESTEST</p>
        </ContainerInformationUser>
      </ContinerInformation>
    </Container>
  );
}

export default index;
