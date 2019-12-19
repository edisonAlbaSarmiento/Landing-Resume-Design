import React from 'react';
import {
  ContainerInformationUser,
} from './styles'

function index(
  {
    children, 
    title,
    icon,
    center
  },
) {
  return (
    <>
    <ContainerInformationUser centerTitle={center}>
    <h4>{title}</h4>
    {icon && (
      <h4>{icon}</h4>
    )}
    </ContainerInformationUser>
      {children}
   </>
  );
}

export default index;
