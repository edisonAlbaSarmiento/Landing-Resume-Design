/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Share from '@material-ui/icons/Share';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerChildren,
  ContainerTitle,
  ContainerIcons,
  ImageContainer,
  TextImage,
  LinkShare,
} from './styles';

function Work({dataWork, selectedLanguage}) {
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Title>
            {selectedLanguage === 0 ? 'Work': 'Trabajo'}
          </Title>
          <Line />
        </ContainerTitle>
        <ContainerIcons>
          <Tooltip title={selectedLanguage === 0 ? 'Share via Whatsapp' : 'Compartir por Whatsapp'} arrow>
            <IconButton>
              <LinkShare href="whatsapp://send?text=https://edisonalbasarmiento.github.io/Landing-Resume-Design/" data-action="share/whatsapp/share">
                <Share />
              </LinkShare>
            </IconButton>
          </Tooltip>

          <IconButton style={{color: 'white'}}>
            <LinkShare>
              <Search />
            </LinkShare>
          </IconButton>
        </ContainerIcons>
      </ContainerHeader>
      <ContainerCards>
        {dataWork && dataWork.map(item => (
          <ContainerChildren onClick={() => {window.open(`${item.urlWork}`)}}>
            <ImageContainer src={`${item.imageWork}`} />
            <TextImage>
              {item.description}
            </TextImage>
          </ContainerChildren>
        ))}

      </ContainerCards>
    </Container>
  );
}

Work.propTypes = {
  dataWork: PropTypes.objectOf.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
}

export default Work;
