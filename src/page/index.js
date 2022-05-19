/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { Pulsate } from "styled-loaders-react";
import { Switch, Route } from "react-router-dom";
import {
  ContainerWork,
  ContainerAbout,
  Lab,
  Contact,
  Menu,
  ContainerDetail,
  ContainerSkills,
  NoMatch,
} from "../components/index";

import { ContainerMenu, ContentBody } from "./styles";
import UserGetData from "../hooks/data";

function Page() {
  const myData = UserGetData();
  const [section, setSection] = useState("");
  const [selectedLanguage, setLanguage] = useState(0);
  const [activeMenu, setStateactiveMenu] = useState(false);
  const [showPageNotFound, setShowPageNotFound] = useState(false);

  return myData.length === 0 ? (
    <Pulsate color="white" size="100px" duration="5s" />
  ) : (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {!showPageNotFound && (
          <div>
            <ContainerMenu>
              <Menu
                section={section}
                selectedLanguage={selectedLanguage}
                setLanguage={setLanguage}
                setSection={setSection}
                activeMenu={activeMenu}
                setStateactiveMenu={setStateactiveMenu}
                dataMenu={
                  selectedLanguage === 1
                    ? myData.data[selectedLanguage].es.dataUserMenu
                    : myData.data[selectedLanguage].en.dataUserMenu
                }
              />
            </ContainerMenu>
          </div>
        )}

        <ContentBody onClick={() => setStateactiveMenu(false)}>
          <Switch>
            {section === "" && (
              <Route exact path="/">
                <ContainerAbout
                  setSection={setSection}
                  selectedLanguage={selectedLanguage}
                  dataAbout={
                    selectedLanguage === 1
                      ? myData?.data[selectedLanguage].es.about
                      : myData?.data[selectedLanguage].en.about
                  }
                />
              </Route>
            )}
            <Route exact path="/skills">
              <ContainerSkills
                selectedLanguage={selectedLanguage}
                dataSkills={
                  selectedLanguage === 1
                    ? myData?.data[selectedLanguage].es.skills
                    : myData?.data[selectedLanguage].en.skills
                }
              />
            </Route>
            <Route exact path="/work">
              <ContainerWork
                selectedLanguage={selectedLanguage}
                dataWork={
                  selectedLanguage === 1
                    ? myData?.data[selectedLanguage].es.work
                    : myData?.data[selectedLanguage].en.work
                }
              />
            </Route>
            <Route exact path="/labs">
              <Lab
                selectedLanguage={selectedLanguage}
                dataLabs={
                  selectedLanguage === 1
                    ? myData?.data[selectedLanguage].es.labs
                    : myData?.data[selectedLanguage].en.labs
                }
              />
            </Route>
            <Route exact path="/contact">
              <Contact selectedLanguage={selectedLanguage} />
            </Route>
            <Route path="/work/:id" exact strict>
              <ContainerDetail
                selectedLanguage={selectedLanguage}
                dataWork={
                  selectedLanguage === 1
                    ? myData?.data[selectedLanguage].es.work
                    : myData?.data[selectedLanguage].en.work
                }
              />
            </Route>
            <Route>
              <NoMatch
                setShowPageNotFound={setShowPageNotFound}
                selectedLanguage={selectedLanguage}
              />
            </Route>
          </Switch>
        </ContentBody>
      </div>
    </>
  );
}

export default Page;
