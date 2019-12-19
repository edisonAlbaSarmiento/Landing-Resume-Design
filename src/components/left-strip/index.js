import React from 'react';
import {
  ContainerLefStrip,
  ContainerImage,
  Image,
} from './styles';
import ContainerInformationUser from '../information-content';

function index() {
  return (
    <ContainerLefStrip>
      <ContainerImage>
        <Image src="https://avatars1.githubusercontent.com/u/31748119?s=460&v=4" />
      </ContainerImage>
        <ContainerInformationUser title='TEST' center>
          <p>sssssss</p>
        </ContainerInformationUser>
        <ContainerInformationUser title='TEST 2' center>
          <p>ededed</p>
        </ContainerInformationUser>
        <ContainerInformationUser title='TEST 3' center>
          <p>Edison</p>
        </ContainerInformationUser>
    </ContainerLefStrip>
  );
}

export default index;
