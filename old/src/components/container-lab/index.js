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
  ButtonCustom,
  TextButtonCustom,
  ContentInfo,
} from "./styles";
import CustomizedDialogs from "../modal";
// import PageNotFound from "../../images/under-construction.json";
// import Lottie from "react-lottie";
import Circle from "@material-ui/icons/BlurCircularTwoTone";

function Lab({ dataLabs, selectedLanguage }) {
  const [activeButton, setActivButton] = useState(false);
  const changeState = (item) => {
    console.log("ENTRO EDI", item);
    setActivButton(!activeButton);
  };
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: PageNotFound,
  //   eventListeners: false,
  // };

  const returnImage = (item) => {
    console.log("item", item);
    if (item.includes("http")) {
      return item;
    }
    const image = require(`../../images/gifs/${item}.gif`);
    return image;
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
              <ContainerDescription>
                {/* <ImageContainer src={returnImage(item?.imageLabs)} /> */}
                <ContainerText>
                  <TextPrimary>{item?.title}</TextPrimary>
                  <TextSecond>{item?.description}</TextSecond>
                  <ContentInfo>
                    <Circle />
                    <Circle />
                  </ContentInfo>
                  <ButtonCustom onClick={() => changeState()}>
                    <TextButtonCustom>
                      {selectedLanguage === 0 ? "Know more" : "Saber más"}
                    </TextButtonCustom>
                  </ButtonCustom>

                  <CustomizedDialogs
                    key={item?.title}
                    activeButton={activeButton}
                    selectedLanguage={selectedLanguage}
                    onClickActive={changeState}
                    showButton={false}
                  >
                    <ImageContainer src={returnImage(item?.imageLabs)} />
                    <ButtonCustom>
                      <TextButtonCustom>
                        {selectedLanguage === 0 ? "View Demo" : "Ver demo"}
                      </TextButtonCustom>
                    </ButtonCustom>
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
