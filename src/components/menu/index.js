/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerImage,
  ImageProfile,
} from './styles';

function Menu({setSection}) {
  return (
    <Container>
    <ContainerImage>
      <ImageProfile src="https://avatars3.githubusercontent.com/u/31748119?s=460&u=5b533fd135904b8b25951011a0c3da20fe15b413&v=4" />
    </ContainerImage>
    <button onClick={() => setSection('')}>
      About
    </button>
    <button onClick={() => setSection('about')}>
      Work
    </button>
    <button onClick={() => setSection('info')}>
      Labs
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
