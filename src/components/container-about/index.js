/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerTitle,
  Title,
  Line,
  ContainerCards,
  Card,
  TitleName,
  SubTitle,
  CardSubTilte,
  TextDescription,
  Button1,
  Button2,
  TextButton,
  ContentButtons,
  ContainerText,
  ContainerImage,
  ImageBackground,
  CardImage,
  ContainerButtons,
} from './styles';

function About({dataAbout, selectedLanguage}) {
  const [activeButton, setActivButton] = useState(1);
  return (
    <Container>
      <ContainerTitle>
        <Title>
          {selectedLanguage === 0 ? ' About': 'Acerca de'} 
        </Title>
        <Line />
      </ContainerTitle>
      <ContainerCards>
        <ContainerText>
          <Card>
            <TitleName>
              {dataAbout.userName}.
            </TitleName>
            <SubTitle>
              {dataAbout.position}
            </SubTitle>
          </Card>
          <CardSubTilte>
            <TextDescription>
              {dataAbout.jobDescription}
            </TextDescription>
          </CardSubTilte>
          <ContainerButtons>
            <ContentButtons>
                <Button1 activeButton={activeButton} onClick={() => setActivButton(1)}>
                  <TextButton>
                    {selectedLanguage === 0 ? 'Hire me': 'Contratame'} 
                  </TextButton>
                </Button1>
                <Button2 activeButton={activeButton} onClick={() => setActivButton(2)}>
                <TextButton>
                  {selectedLanguage === 0 ? 'Know more': 'Saber más'} 
                </TextButton>
                </Button2>
            </ContentButtons>
          </ContainerButtons>
        </ContainerText>
        <ContainerImage>
          <CardImage>
            <ImageBackground  src="https://pngimage.net/wp-content/uploads/2018/05/empresario-png-3.png" />
          </CardImage>
        </ContainerImage>
      </ContainerCards>
    </Container>
  );
}

About.propTypes = {
  dataAbout: PropTypes.objectOf.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}
export default About;
