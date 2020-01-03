import React, { useState } from 'react';
// import LeftStrip from '../components/left-strip';
import {
  Container,
  // ContinerTitle,
  // TitleName,
  // ContinerInformation,
  // ContainerText,
  // ContainerInformation
} from './styles'
// import ContainerInformationUser from '../components/information-content';
import { Pulsate } from 'styled-loaders-react'
import { Grid, Row, Col } from 'react-flexbox-grid';


//Hooks
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
            Hello, world!
          </h4>
          <button onClick={() => setSection('about')}>
          Click me about
        </button>
        <button onClick={() => setSection('info')}>
          Click me about
        </button>
        <button onClick={() => setSection('contact')}>
          Click me about
        </button>
        </Container>
      </Col>
      {section === '' &&(
        <Col xs={9} >
        Hello, por defecto!
        </Col>
      )}
      {section === 'about' &&(
        <Col xs={9} >
        Hello, about!
        </Col>
      )}
      {section === 'info' &&(
        <Col xs={9} >
        Hello, info!
        </Col>
      )}
      {section === 'contact' &&(
        <Col xs={9} >
        Hello, contact!
        </Col>
      )}
      </Row>
    </Grid>
  );
}

export default Page;
