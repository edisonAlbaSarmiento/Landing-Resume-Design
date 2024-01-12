/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerChildren,
  ContainerTitle,
  ImageContainer,
  ContainerDescription,
  ContainerText,
  TextPrimary,
  TextSecond,
} from "./styles";

function ContainerSkills({ dataSkills, selectedLanguage }) {
  const [activeButton, setActivButton] = useState(false);
  const changeState = (item) => {
    setActivButton(!activeButton);
  };

  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>{selectedLanguage === 0 ? "Skills" : "Habilidades"}</Title>
          <Line />
        </ContainerTitle>
      </ContainerHeader>
      <ContainerCards>
        {dataSkills &&
          dataSkills.map((item, index) => (
            <ContainerChildren onClick={() => changeState(item)} key={index}>
              <ContainerDescription>
                <ImageContainer
                  src={`${item?.image}`}
                  title={`${item?.title}`}
                />
                <ContainerText>
                  <TextPrimary>{item?.title}</TextPrimary>
                  <TextSecond>{item?.description}</TextSecond>
                </ContainerText>
              </ContainerDescription>
            </ContainerChildren>
          ))}
      </ContainerCards>
    </Container>
  );
}

ContainerSkills.propTypes = {
  dataSkills: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.number.isRequired,
};

export default ContainerSkills;
