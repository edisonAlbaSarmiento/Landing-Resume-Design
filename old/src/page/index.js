import React, { useState, useEffect, useCallback } from "react";
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
  const { myData, errorMessage } = UserGetData();
  console.log("myData", myData);
  console.log("errorMessage", errorMessage);

  const [section, setSection] = useState("");
  const [selectedLanguage, setLanguage] = useState(0);
  const [activeMenu, setStateactiveMenu] = useState(false);
  const [showPageNotFound, setShowPageNotFound] = useState(false);
  const [dataMenuState, setDataUserMenu] = useState(null);
  const [dataAboutState, setDataAbout] = useState(null);
  const [dataSkillsState, setDataSkills] = useState([]);
  const [dataWorkState, setDataWork] = useState([]);
  const [dataLabsState, setDataLabs] = useState([]);

  const _getData = useCallback(() => {
    if (myData?.data?.length > 0) {
      switch (selectedLanguage) {
        case 0:
          setDataUserMenu(myData?.data[selectedLanguage].en.dataUserMenu);
          setDataAbout(myData?.data[selectedLanguage].en.about);
          setDataSkills(myData?.data[selectedLanguage].en.skills);
          setDataWork(myData?.data[selectedLanguage].en.work);
          setDataLabs(myData?.data[selectedLanguage].en.labs);
          break;
        case 1:
          setDataUserMenu(myData?.data[selectedLanguage].es.dataUserMenu);
          setDataAbout(myData?.data[selectedLanguage].es.about);
          setDataSkills(myData?.data[selectedLanguage].es.skills);
          setDataWork(myData?.data[selectedLanguage].es.work);
          setDataLabs(myData?.data[selectedLanguage].es.labs);
          break;
        default:
          break;
      }
    }
    console.log(selectedLanguage);
  }, [selectedLanguage, myData]);

  useEffect(() => {
    _getData();
  }, [_getData]);

  if (errorMessage) {
    return (
      <NoMatch
        setShowPageNotFound={setShowPageNotFound}
        selectedLanguage={selectedLanguage}
      />
    );
  }
  console.info("dataLabsState", [
    dataLabsState,
    dataWorkState,
    dataSkillsState,
    dataAboutState,
    dataMenuState,
  ]);

  console.log("dataSkillsState", dataSkillsState);
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
                dataMenu={dataMenuState}
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
                  dataAbout={dataAboutState}
                />
              </Route>
            )}
            <Route exact path="/skills">
              <ContainerSkills
                selectedLanguage={selectedLanguage}
                dataSkills={dataSkillsState}
              />
            </Route>
            <Route exact path="/work">
              <ContainerWork
                selectedLanguage={selectedLanguage}
                dataWork={dataWorkState}
              />
            </Route>
            <Route path="/work/:id" exact strict>
              <ContainerDetail
                selectedLanguage={selectedLanguage}
                dataWork={dataWorkState}
              />
            </Route>
            <Route exact path="/labs">
              <Lab
                selectedLanguage={selectedLanguage}
                dataLabs={dataLabsState}
              />
            </Route>
            <Route exact path="/contact">
              <Contact selectedLanguage={selectedLanguage} />
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
