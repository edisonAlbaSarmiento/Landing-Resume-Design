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

function Contact({dataLabs}) {
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
        <Title>
          Contact
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
                View More  <ArrowForwardIosIcon style={{ fontSize: 10 }} />
              </TextThree>
            </ContainerText>
           
          </ContainerDescription>
        
        </ContainerChildren>
      ))}

    </ContainerCards>
    </Container>
  );
}

Contact.propTypes = {
  dataLabs: PropTypes.objectOf.isRequired,
}

export default Contact;
