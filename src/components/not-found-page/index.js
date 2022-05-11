import React from "react";
import { useLocation } from "react-router-dom";
import PageNotFound from "../../images/astro.json";
import { Content, BackgroundPage, Title } from "./styled";

function NoMatch() {
  const location = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    eventListeners: false,
  };

  return (
    <Content>
      <BackgroundPage options={defaultOptions} />
      <Title>
        NO ENCONTRE LA RUTA <code>{location.pathname}</code>
      </Title>
    </Content>
  );
}

export default NoMatch;
