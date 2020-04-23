/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
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

index.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, 
  center: PropTypes.number.isRequired,
}

export default index;
