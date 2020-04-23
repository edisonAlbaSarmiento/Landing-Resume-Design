/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Pulsate } from 'styled-loaders-react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  ContainerRight, 
  ContainerAbout
} from '../components/index';

import {
  Container,
  // ContinerTitle,
  // TitleName,
  // ContinerInformation,
  // ContainerText,
  // ContainerInformation
} from './styles'
// import ContainerInformationUser from '../components/information-content';


// Hooks
import UserGetData from '../hooks/data';

function Page() {
  const myData = UserGetData();
  const [section, setSection] = useState('');

  return myData.length === 0 ? <Pulsate color="red" size="100px" duration="5s" /> :(
    <Grid>
     <Row>
      <Col xs={3} >
        <Container>
          <h4 onClick={() => setSection('')}>
            Inicio
          </h4>
          <button onClick={() => setSection('about')}>
          About
        </button>
        <button onClick={() => setSection('info')}>
          Info
        </button>
        <button onClick={() => setSection('contact')}>
          Contact
        </button>
        </Container>
      </Col>
      {section === '' &&(
        <Col xs={9} >
          <ContainerAbout />
        </Col>
      )}
      {section === 'about' &&(
        <Col xs={9} >
          <ContainerRight />

        </Col>
      )}
      {section === 'info' &&(
        <Col xs={9} >
        Hola informacion
        </Col>
      )}
      {section === 'contact' &&(
        <Col xs={9} >
        Hola contactenos
        </Col>
      )}
      </Row>
    </Grid>
  );
}

export default Page;
