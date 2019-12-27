import React from 'react';
import {
  ContainerLefStrip,
  ContainerImage,
  Image,
  ContainerInfoUser,
  ContianerPower,
} from './styles';
import ContainerInformationUser from '../information-content';

function index({nameUser, avatar, email, phone}) {
  console.log('nameUser',nameUser)
  const name = nameUser;
  return (
    <ContainerLefStrip>
      <ContainerImage>
        <Image src={avatar} />
      </ContainerImage>
        <ContainerInformationUser title='Info' center>
          <ContainerInfoUser>
            <p>{name}</p>
            <p>EEEEEE</p>
          </ContainerInfoUser>
          <ContainerInfoUser>
            <p>{email}</p>
            <p>EEEEEE</p>
          </ContainerInfoUser>
          <ContainerInfoUser>
            <p>{phone}</p>
            <p>EEEEEE</p>
          </ContainerInfoUser>
        </ContainerInformationUser>
        <ContainerInformationUser title='Power Charge' center>
          <ContianerPower>
            50%
          </ContianerPower>
        </ContainerInformationUser>
        <ContainerInformationUser title='Redes Sociales' center>
          <p>Edison</p>
        </ContainerInformationUser>
    </ContainerLefStrip>
  );
}

export default index;
