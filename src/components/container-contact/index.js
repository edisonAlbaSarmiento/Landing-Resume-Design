/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerTitle,
  TextTarea,
  TitleTextTarea,
  ContainerAbout,
  ContainerInputs,
  Input,
  ButtonSubmit,
  TextButton,
  ContaninerButton,
} from './styles';

function Contact() {
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
        <ContainerAbout>
          <TitleTextTarea>
            Project brief description
          </TitleTextTarea>
          <TextTarea 
            placeholder="Project Type, Target customer, timeline, estimate etc"
            maxLength="300"
          />
        </ContainerAbout>
        <ContainerAbout>
          <TitleTextTarea>
            Project brief description
          </TitleTextTarea>
          <ContainerInputs>
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Company Name" />
            <Input placeholder="Position" />
            <ContaninerButton>
              <ButtonSubmit>
                <TextButton>
                  Request a Quote
                </TextButton>
              </ButtonSubmit>
            </ContaninerButton>
         
          </ContainerInputs>
        </ContainerAbout>

    </ContainerCards>
    </Container>
  );
}

export default Contact;
