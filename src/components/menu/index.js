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
  ContainerButtons,
  ButtonMenu
} from './styles';

function Menu({setSection, section}) {
  return (
    <Container>
    <ContainerImage>
      <ImageProfile src="https://avatars3.githubusercontent.com/u/31748119?s=460&u=5b533fd135904b8b25951011a0c3da20fe15b413&v=4" />
    </ContainerImage>
    <ContainerButtons>
      <ButtonMenu activeButton={section === ''} onClick={() => setSection('')}>
        About
      </ ButtonMenu>
      <ButtonMenu activeButton={section === 'about'}  onClick={() => setSection('about')}>
        Work
      </ButtonMenu>
      <ButtonMenu activeButton={section === 'info'}  onClick={() => setSection('info')}>
        Labs
      </ButtonMenu>
      <ButtonMenu activeButton={section === 'contact'}  onClick={() => setSection('contact')}>
        Contact
      </ButtonMenu>
    </ContainerButtons>
  </Container>
  );
}

Menu.propTypes = {
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
}

export default Menu;
