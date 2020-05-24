/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from "react-player";
import Typography from '@material-ui/core/Typography';
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
  ButtonHire,
  ButtonKnow,
  TextButton,
  ContentButtons,
  ContainerText,
  ContainerImage,
  ImageBackground,
  CardImage,
  ContainerButtons,
} from './styles';
import DialogTitle from '../modal';

function About({dataAbout, selectedLanguage, setSection}) {
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
              {dataAbout.jobDescriptionShort}
            </TextDescription>
          </CardSubTilte>
          <ContainerButtons>
            <ContentButtons>
              <ButtonHire activeButton={activeButton} onClick={() => {
                setActivButton(1)
                setSection('contact')
              }}>
                <TextButton>
                  {selectedLanguage === 0 ? 'Hire me': 'Contratame'}
                </TextButton>
              </ButtonHire>
              <ButtonKnow activeButton={activeButton} onClick={() => setActivButton(2)}>
                <DialogTitle
                  title={
                    selectedLanguage === 0 ?
                      'Autobiography'
                      :
                      'Autobiografía' }
                  activeButton={activeButton}
                  onClickActive={() => setActivButton(2)}
                  selectedLanguage={selectedLanguage}
                >
                  <Typography gutterBottom>
                    {dataAbout.DescriptionLargeModal}
                  </Typography>
                  <ReactPlayer
                    width="100%"
                    url={`${dataAbout.urlVideoProfile}`}
                  />
                </DialogTitle>
              </ButtonKnow>

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
  setSection: PropTypes.func.isRequired,
}
export default About;
