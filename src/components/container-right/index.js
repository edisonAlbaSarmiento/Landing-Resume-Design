import React from 'react';
import PropTypes from 'prop-types';
import {
  ContainerLefStrip,
  ContainerImage,
  Image,
  ContainerInfoUser,
  ContianerPower,
  Progress,
  Container,
  ProgressFill
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
          <Container>
          <ContianerPower>
              <p>
               JS
              </p>
              <Progress>
                <ProgressFill value="5%"/>
              </Progress>
            </ContianerPower>
            <ContianerPower>
              JS <Progress>
                <ProgressFill value="20%"/>
              </Progress>
            </ContianerPower>
            <ContianerPower>
              JS <Progress>
                <ProgressFill value="50%" />
              </Progress>
            </ContianerPower>
          </Container>
  
        </ContainerInformationUser>
        <ContainerInformationUser title='Redes Sociales' center>
          <p>Edison</p>
        </ContainerInformationUser>
    </ContainerLefStrip>
  );
}

index.propTypes = {
  nameUser: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired, 
  phone: PropTypes.number.isRequired,
}

export default index;
