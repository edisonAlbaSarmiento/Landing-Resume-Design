/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  Container,
  ContainerImage,
  ImageProfile,
  ContainerButtons,
  ButtonMenu,
  ContainerIconsFooter,
  ContainerChangeLanguage,
  TextLanguage,
  ContainerLanguage,
  ContainerMenuBurger,
} from './styles';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function Menu({
  setLanguage,
  setSection,
  section,
  dataMenu,
  selectedLanguage,
}) {
  const [state, setState] = useState({
    checkedC: true,
  });

  const [activeMenu, setStateactiveMenu] = useState(false);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if( event.target.checked){
      setLanguage(0)
    }else {
      setLanguage(1)
    }
  };
  return (
    <div>
      <ContainerMenuBurger>
        <IconButton style={{color: 'white' }} onClick={() => setStateactiveMenu(!activeMenu)}>
          <MenuIcon/>
        </IconButton>
      </ContainerMenuBurger>
      <Container activeMenu={activeMenu}>

        <ContainerImage>
          <ImageProfile src={`${dataMenu.userImage}`} />
        </ContainerImage>
        <ContainerButtons>
          <ButtonMenu activeButton={section === ''} onClick={() => {
            setSection('')
            setStateactiveMenu(!activeMenu)
          }}>
            {selectedLanguage === 0 ? 'About': 'Acerca de' }
          </ ButtonMenu>
          <ButtonMenu activeButton={section === 'about'}  onClick={() => {
            setSection('about')
            setStateactiveMenu(!activeMenu)
          }}>
            {selectedLanguage === 0 ? 'Work': 'Trabajo' }
          </ButtonMenu>
          <ButtonMenu activeButton={section === 'labs'}  onClick={() => {
            setSection('labs')
            setStateactiveMenu(!activeMenu)
          }}>
            {selectedLanguage === 0 ? 'Labs': 'Laboratorios' }
          </ButtonMenu>
          <ButtonMenu activeButton={section === 'contact'}  onClick={() => {
            setSection('contact')
            setStateactiveMenu(!activeMenu)
          }}>
            {selectedLanguage === 0 ? 'Contact': 'Contacto' }
          </ButtonMenu>
          <ContainerChangeLanguage>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <ContainerLanguage>
                  <TextLanguage>
                ES
                  </TextLanguage>
                </ContainerLanguage>
                <ContainerLanguage>
                  <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                </ContainerLanguage>
                <ContainerLanguage>
                  <TextLanguage>
                EN
                  </TextLanguage>
                </ContainerLanguage>
              </Grid>
            </Typography>
          </ContainerChangeLanguage>
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
    </div>
  );
}

Menu.propTypes = {
  dataMenu: PropTypes.objectOf.isRequired,
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default Menu;
