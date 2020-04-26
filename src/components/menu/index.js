/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from './styles';

function Menu({setSection}) {
  return (
    <Container>
        <h4 onClick={() => setSection('')}>
            Inicio
        </h4>
        <button onClick={() => setSection('about')}>
        About
    </button>
    <button onClick={() => setSection('info')}>
        Info
    </button>
    <button onClick={() => setSection('contact')}>
        Contact
    </button>
  </Container>
  );
}

Menu.propTypes = {
  setSection: PropTypes.func.isRequired,
}

export default Menu;
