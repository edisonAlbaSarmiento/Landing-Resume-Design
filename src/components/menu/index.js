/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
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

function Menu({setSection, section, dataMenu}) {
  return (
    <Container>
      <ContainerImage>
        <ImageProfile src={`${dataMenu.userImage}`} />
      </ContainerImage>
      <ContainerButtons>
        <ButtonMenu activeButton={section === ''} onClick={() => setSection('')}>
          About
        </ ButtonMenu>
        <ButtonMenu activeButton={section === 'about'}  onClick={() => setSection('about')}>
          Work
        </ButtonMenu>
        <ButtonMenu activeButton={section === 'labs'}  onClick={() => setSection('labs')}>
          Labs
        </ButtonMenu>
        <ButtonMenu activeButton={section === 'contact'}  onClick={() => setSection('contact')}>
          Contact
        </ButtonMenu>
      </ContainerButtons>
      <ContainerIconsFooter>
      <IconButton style={{color: '#343b4f'}} onClick={() => window.open(`${dataMenu.facebook}`)}>
        <GitHubIcon/>
      </IconButton>
      <IconButton style={{color: '#343b4f'}} onClick={() => window.open(`${dataMenu.instagram}`)}>
        <InstagramIcon/>
      </IconButton>
      <IconButton style={{color: '#343b4f'}} onClick={() => window.open(`${dataMenu.linkedIn}`)}> 
        <LinkedInIcon />
      </IconButton>
      <IconButton style={{color: '#343b4f'}} onClick={() => window.open(`${dataMenu.twitter}`)}>
        <TwitterIcon />
      </IconButton>
    </ContainerIconsFooter>
  </Container>
  );
}

Menu.propTypes = {
  dataMenu: PropTypes.objectOf.isRequired,
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
}

export default Menu;
