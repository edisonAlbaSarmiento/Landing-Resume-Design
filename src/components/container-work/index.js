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
} from './styles';

function index({dataWork}) {
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
      <IconButton style={{color: 'white'}}>
          <Share />
        </IconButton>
        <IconButton style={{color: 'white'}}>
          <Search />
        </IconButton>
      </ContainerIcons>
    </ContainerHeader>
    <ContainerCards>
      {dataWork.map(item => (
        <ContainerChildren onClick={() => window.open(`${item.urlWork}`)}>
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

index.propTypes = {
  dataWork: PropTypes.objectOf.isRequired,
}

export default index;
