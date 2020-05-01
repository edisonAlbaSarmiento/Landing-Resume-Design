/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
  Container,
  ContainerImage,
  ImageProfile,
  ContainerButtons,
  ButtonMenu,
  ContainerIconsFooter,
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
      <ContainerIconsFooter>
      <IconButton style={{color: '#343b4f'}}>
        <GitHubIcon/>
      </IconButton>
      <IconButton style={{color: '#343b4f'}}>
        <FacebookIcon/>
      </IconButton>
      <IconButton style={{color: '#343b4f'}}>
        <LinkedInIcon />
      </IconButton>
      <IconButton style={{color: '#343b4f'}}>
        <TwitterIcon />
      </IconButton>
    </ContainerIconsFooter>
  </Container>
  );
}

Menu.propTypes = {
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
}

export default Menu;
