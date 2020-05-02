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

function Lab({dataWork}) {
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
        <Title>
            Lab
          </Title>
        <Line />
      </ContainerTitle>
    </ContainerHeader>
    <ContainerCards>
      {dataWork.map(item => (
        <ContainerChildren>
          <ContainerDescription>
            <ImageContainer src={`${item.imageWork}`} />
            <ContainerText>
              <TextPrimary>
                {item.description}
              </TextPrimary>
              <TextSecond>
                {item.description}{item.description}
              </TextSecond>
              <TextThree onClick={() => {window.open(`${item.urlWork}`)}}>
                {item.description} <ArrowForwardIosIcon style={{ fontSize: 10 }} />
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
  dataWork: PropTypes.objectOf.isRequired,
}

export default Lab;
