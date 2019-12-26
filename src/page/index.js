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
import { Pulsate } from 'styled-loaders-react'
//Hooks
import UserGetData from '../hooks/data';

function index() {
  const myData = UserGetData();
  console.log('myData',myData)
  return myData.length === 0 ? <Pulsate color="red" size="100px" duration="5s" /> :(
    <Container>
      <ContinerTitle>
        <TitleName>{myData.name}</TitleName>
      </ContinerTitle>
      <LeftStrip/>
      <ContinerInformation>
        <TitleName>Edison jordan alba sarmiento</TitleName>
        <ContainerInformationUser title='Abut me' icon='rocket'>
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
