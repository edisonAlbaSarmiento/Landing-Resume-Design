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
  Row,
  ContainerMenu,
} from './styles';

// Hooks
import UserGetData from '../hooks/data';

function Page() {
  const myData = UserGetData();
  const [section, setSection] = useState('');
  const [selectedLanguage, setLanguage] = useState(0);
  return myData.length === 0 ? <Pulsate color="white" size="100px" duration="5s" /> :(
    <Grid>
      <Row>
        <ContainerMenu>
          <Menu
            section={section}
            selectedLanguage={selectedLanguage}
            setLanguage={setLanguage}
            setSection={setSection}
            dataMenu={selectedLanguage === 1 ? myData.data[selectedLanguage].es.dataUserMenu : myData.data[selectedLanguage].en.dataUserMenu}
          />
        </ContainerMenu>
        {section === '' &&(
          <Col xs={9} >
            <ContainerAbout
              setSection={setSection}
              selectedLanguage={selectedLanguage}
              dataAbout={selectedLanguage === 1 ? myData.data[selectedLanguage].es.about : myData.data[selectedLanguage].en.about}
            />
          </Col>
        )}
        {section === 'about' &&(
          <Col xs={9} >
            <ContainerWork
              selectedLanguage={selectedLanguage}
              dataWork={selectedLanguage === 1 ? myData.data[selectedLanguage].es.work : myData.data[selectedLanguage].en.work}
            />
          </Col>
        )}
        {section === 'labs' &&(
          <Col xs={9} >
            <Lab
              selectedLanguage={selectedLanguage}
              dataLabs={selectedLanguage === 1 ? myData.data[selectedLanguage].es.labs : myData.data[selectedLanguage].en.labs}
            />
          </Col>
        )}
        {section === 'contact' &&(
          <Col xs={9} >
            <Contact selectedLanguage={selectedLanguage} />
          </Col>
        )}
      </Row>
    </Grid>
  );
}

export default Page;
