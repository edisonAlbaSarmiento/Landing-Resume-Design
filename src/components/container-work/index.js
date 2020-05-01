/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Share from '@material-ui/icons/Share';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
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

function Work({dataWork}) {
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
        <Title>
            Work
          </Title>
        <Line />
      </ContainerTitle>
      <ContainerIcons>
        <IconButton>
          <LinkShare href="whatsapp://send?text=https://edisonalbasarmiento.github.io/Landing-Resume-Design/" data-action="share/whatsapp/share">
           <Share />
          </LinkShare>  
        </IconButton>
        <IconButton style={{color: 'white'}}>
          <LinkShare>
            <Search />
          </LinkShare>
        </IconButton>
      </ContainerIcons>
    </ContainerHeader>
    <ContainerCards>
      {dataWork.map(item => (
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
}

export default Work;
