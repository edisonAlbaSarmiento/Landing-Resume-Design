/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Pulsate } from 'styled-loaders-react'
import { Grid, Col } from 'react-flexbox-grid';
import {
  ContainerWork, 
  ContainerAbout,
  Lab,
  Contact,
  Menu
} from '../components/index';

import {
  // Container,
  // ContinerTitle,
  // TitleName,
  // ContinerInformation,
  // ContainerText,
  // ContainerInformation
  Row,
  ContainerMenu,
} from './styles'
// import ContainerInformationUser from '../components/information-content';


// Hooks
import UserGetData from '../hooks/data';

function Page() {
  const myData = UserGetData();
  const [section, setSection] = useState('');
console.log('mydata',myData)
  return myData.length === 0 ? <Pulsate color="red" size="100px" duration="5s" /> :(
    <Grid>
     <Row>
      <ContainerMenu>
        <Menu section={section}  setSection={setSection} dataMenu={myData.dataUserMenu} />
      </ContainerMenu>
      {section === '' &&(
        <Col xs={9} >
          <ContainerAbout dataAbout={myData.about} />
        </Col>
      )}
      {section === 'about' &&(
        <Col xs={9} >
          <ContainerWork dataWork={myData.work}/>
        </Col>
      )}
      {section === 'labs' &&(
        <Col xs={9} >
          <Lab dataLabs={myData.labs} />
        </Col>
      )}
      {section === 'contact' &&(
        <Col xs={9} >
          <Contact  />
        </Col>
      )}
      </Row>
    </Grid>
  );
}

export default Page;
