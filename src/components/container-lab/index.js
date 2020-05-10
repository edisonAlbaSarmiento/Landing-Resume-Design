/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
  TextThree
} from './styles';

function Lab({dataLabs, selectedLanguage}) {
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
          <Title>
            {selectedLanguage === 0 ? 'Labs': 'Laboratorios'} 
          </Title>
        <Line />
      </ContainerTitle>
    </ContainerHeader>
    <ContainerCards>
      {dataLabs && dataLabs.map(item => (
        <ContainerChildren>
          <ContainerDescription>
            <ImageContainer src={`${item.imageLabs}`} />
            <ContainerText>
              <TextPrimary>
                {item.title}
              </TextPrimary>
              <TextSecond>
                {item.description}
              </TextSecond>
              <TextThree onClick={() => {window.open(`${item.viewMoreIn}`)}}>
                {selectedLanguage === 0 ? 'View More': 'Ver más'} 
                <ArrowForwardIosIcon style={{ fontSize: 10 }} />
              </TextThree>
            </ContainerText>
           
          </ContainerDescription>
        
        </ContainerChildren>
      ))}

    </ContainerCards>
    </Container>
  );
}

Lab.propTypes = {
  dataLabs: PropTypes.objectOf.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default Lab;
