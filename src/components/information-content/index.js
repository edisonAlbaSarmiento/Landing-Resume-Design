import React from 'react';
import {
  ContainerInformationUser,
} from './styles'

function index(
  {children}
) {
  return (
    <>
    <ContainerInformationUser>
    <h4>Abut me</h4>
    <h4>Abut me</h4>
    </ContainerInformationUser>
        {children}
   </>
  );
}

export default index;
