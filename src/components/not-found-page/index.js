import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageNotFound from "../../images/astro.json";
import {
  Content,
  BackgroundPage,
  Title,
  ButtonMenu,
  ContentButtons,
} from "./styled";

function NoMatch({ setShowPageNotFound, selectedLanguage }) {
  const location = useLocation();
  useEffect(() => {
    setShowPageNotFound(true);
  }, [setShowPageNotFound]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    eventListeners: false,
  };

  return (
    <Content>
      <BackgroundPage width={"70%"} options={defaultOptions} />
      <Title>
        {selectedLanguage === 0
          ? "¡Oops I can't find the page!"
          : "¡Ups no encuentro la página!"}{" "}
        <code>{location.pathname}</code>
      </Title>
      <ContentButtons>
        <Link to="/">
          <ButtonMenu onClick={() => setShowPageNotFound(false)}>
            {selectedLanguage === 0 ? "Go back" : "Volver"}
          </ButtonMenu>
        </Link>
      </ContentButtons>
    </Content>
  );
}

export default NoMatch;
