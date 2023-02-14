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
  TextThree,
  ContainerModal,
} from "./styles";
import CustomizedDialogs from "../modal";
import PageNotFound from "../../images/under-construction.json";
import Lottie from "react-lottie";

function Lab({ dataLabs, selectedLanguage }) {
  const [activeButton, setActivButton] = useState(false);
  const changeState = (item) => {
    console.log("ENTRO EDI", item);
    setActivButton(!activeButton);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    eventListeners: false,
  };

  return (
    <Container>
      {/* <ContainerCards>
        <Lottie width={"70%"} options={defaultOptions} />
      </ContainerCards> */}

      <ContainerHeader>
        <ContainerTitle>
          <Title>{selectedLanguage === 0 ? "Labs" : "Laboratorios"}</Title>
          <Line />
        </ContainerTitle>
      </ContainerHeader>
      <ContainerCards>
        {dataLabs &&
          dataLabs.map((item, index) => (
            <ContainerChildren key={item?.title}>
              {console.log("index", index)}

              <ContainerDescription>
                <ImageContainer src={`${item?.imageLabs}`} />
                <ContainerText>
                  <TextPrimary>{item?.title}</TextPrimary>
                  <TextSecond>{item?.description}</TextSecond>

                  <CustomizedDialogs
                    key={item?.title}
                    title={selectedLanguage === 0 ? "Detail" : "Detalle"}
                    activeButton={activeButton}
                    selectedLanguage={selectedLanguage}
                    onClickActive={changeState}
                  >
                    {console.log("ENTRO EDI2", activeButton)}
                    Contain
                  </CustomizedDialogs>
                </ContainerText>
              </ContainerDescription>
            </ContainerChildren>
          ))}
      </ContainerCards>
    </Container>
  );
}

Lab.defaultProps = {
  dataLabs: [],
};

Lab.propTypes = {
  dataLabs: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.number.isRequired,
};

export default Lab;
