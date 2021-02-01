/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Pulsate } from 'styled-loaders-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import {
  ContainerWork,
  ContainerAbout,
  Lab,
  Contact,
  Menu,
  ContainerDetail,
  ContainerSkills
} from '../components/index';

import {
  ContainerMenu,
} from './styles';
import UserGetData from '../hooks/data';


function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>
        NO ENCONTR LA RUTA <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Page() {
  const myData = UserGetData();
  const [section, setSection] = useState('');
  const [selectedLanguage, setLanguage] = useState(0);
  return myData.length === 0 ? <Pulsate color="white" size="100px" duration="5s" /> :(
    <Router>
      <div style={{ width: '100%', height: '100%', display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{ }}>
          <ContainerMenu>
            <Menu
              section={section}
              selectedLanguage={selectedLanguage}
              setLanguage={setLanguage}
              setSection={setSection}
              dataMenu={selectedLanguage === 1 ? myData.data[selectedLanguage].es.dataUserMenu : myData.data[selectedLanguage].en.dataUserMenu}
            />
          </ContainerMenu>
        </div>
        <div style={{width: '60%'}}>
          <Switch>
            {section === '' &&(
              <Route exact path="/">
                <ContainerAbout
                  setSection={setSection}
                  selectedLanguage={selectedLanguage}
                  dataAbout={selectedLanguage === 1 ? myData.data[selectedLanguage].es.about : myData.data[selectedLanguage].en.about}
                />
              </Route>
            )}
            <Route exact path="/skills">
              <ContainerSkills
                selectedLanguage={selectedLanguage}
                dataLabs={selectedLanguage === 1 ? myData.data[selectedLanguage].es.work : myData.data[selectedLanguage].en.work}
              />
            </Route>
            <Route exact path="/work">
              <ContainerWork
                selectedLanguage={selectedLanguage}
                dataWork={selectedLanguage === 1 ? myData.data[selectedLanguage].es.work : myData.data[selectedLanguage].en.work}
              />
            </Route>
            <Route exact path="/labs">
              <Lab
                selectedLanguage={selectedLanguage}
                dataLabs={selectedLanguage === 1 ? myData.data[selectedLanguage].es.labs : myData.data[selectedLanguage].en.labs}
              />
            </Route>
            <Route exact path="/contact">
              <Contact selectedLanguage={selectedLanguage} />
            </Route>
            <Route path="/work/:id"
              exact
              strict
              component={ContainerDetail}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Page;
