import React from 'react';
import LeftStrip from '../components/left-strip';
import {
  Container,
  ContinerTitle,
  TitleName,
  ContinerInformation,
  ContainerText,
  ContainerInformation
} from './styles'
import ContainerInformationUser from '../components/information-content';
import { Pulsate } from 'styled-loaders-react'
//Hooks
import UserGetData from '../hooks/data';

function index() {
  const myData = UserGetData();
  return myData.length === 0 ? <Pulsate color="red" size="100px" duration="5s" /> :(
    <Container>
      <ContinerTitle>
        <TitleName>{myData.name}</TitleName>
      </ContinerTitle>
      <LeftStrip 
        avatar={myData.avatar} 
        email={myData.email}
        phone={myData.phone}
        nameUser={myData.name}
      />
      <ContinerInformation>
        <ContainerInformationUser title='Abut me' icon='rocket'>
          <ContainerText>
          {myData.bio}
          </ContainerText>
        </ContainerInformationUser>
        <ContainerInformationUser title='Education' icon='NAME 2'>
        {myData.education.map((item, index) => (
          <ContainerInformation key={index}>
            <h4>{item.startDate}</h4>
            {item.endDate !== '' && (
              <h4>{item.endDate}</h4>
            )}
            <p>{item.institution}</p>
            <p>{item.degree}</p>
            <p>{item.description}</p>
            {item.link !== '' && (
              <a href={item.link}>Ver credencial</a>
            )}
          </ContainerInformation>
        ))}
        </ContainerInformationUser>
        <ContainerInformationUser title='Experience' icon='NAME 3'>
          {myData.experience.map((item, index) => (
            <ContainerInformation key={index}>
              <h4>{item.startDate}</h4>
              {item.endDate !== '' && (
                <h4>{item.endDate}</h4>
              )}
              <p>{item.company}</p>
              <p>{item.jobTitle}</p>
              <p>{item.jobDescription}</p>
            </ContainerInformation>
          ))}
        </ContainerInformationUser>
        <ContainerInformationUser title='Certificate' icon='NAME 3'>
          {myData.certificate.map((item, index) => (
          <ContainerInformation key={index}>
            <h4>{item.date}</h4>
            <p>{item.institution}</p>
            <p>{item.name}</p>
            <p>{item.description}</p>
            {item.link !== '' && (
              <a href='https://es.reactjs.org/docs/hooks-reference.html'>Ver credencial</a>
            )}
          </ContainerInformation>
          ))}
 

        </ContainerInformationUser>
      </ContinerInformation>
    </Container>
  );
}

export default index;
