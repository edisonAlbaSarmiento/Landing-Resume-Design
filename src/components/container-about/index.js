/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from "react-player";
import Typography from '@material-ui/core/Typography';
import {
  Link,
  useParams
} from "react-router-dom";
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
import CustomizedDialogs from '../modal';

function About({dataAbout, selectedLanguage, setSection}) {
  const [activeButton, setActiveButton] = useState(false);
  const { dataRouter } = useParams();
  console.log('dataRouter', dataRouter)
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
              <Link to="/contact" style={{textDecoration: 'none',   width: '44%'}}>
                <ButtonHire activeButton={activeButton} onClick={() => {
                  setActiveButton(false)
                  setSection('contact')
                }}>
                  <TextButton>
                    {selectedLanguage === 0 ? 'Hire me': 'Contratame'}
                  </TextButton>
                </ButtonHire>
              </Link>
              <ButtonKnow activeButton={activeButton} onClick={() => setActiveButton(true)}>
                <CustomizedDialogs
                  title={
                    selectedLanguage === 0 ?
                      'Autobiography'
                      :
                      'Autobiografía' }
                  activeButton={activeButton}
                  onClickActive={() => setActiveButton(true)}
                  selectedLanguage={selectedLanguage}
                >
                  <Typography gutterBottom>
                    {dataAbout.DescriptionLargeModal}
                  </Typography>
                  <ReactPlayer
                    width="100%"
                    url={`${dataAbout.urlVideoProfile}`}
                  />
                </CustomizedDialogs>
              </ButtonKnow>
              {/* <Link to={{
                pathname: "/help",
                dataRouter: 'test'
              }} >
                <ButtonHire>
                  {selectedLanguage === 0 ? 'TESTs': 'TEST' }
                </ButtonHire>
              </Link> */}
            </ContentButtons>
          </ContainerButtons>
        </ContainerText>
        <ContainerImage>
          <CardImage>
            <ImageBackground  src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1310&q=80" />
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
