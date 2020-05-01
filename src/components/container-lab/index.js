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
  ImageContainer,
  TextImage,
  ContainerDescription,
} from './styles';

function Lab({dataWork}) {
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
        <Title>
            Lab
          </Title>
        <Line />
      </ContainerTitle>
    </ContainerHeader>
    <ContainerCards>
      {dataWork.map(item => (
        <ContainerChildren onClick={() => {window.open(`${item.urlWork}`)}}>
          <ImageContainer src={`${item.imageWork}`} />
          <ContainerDescription>
            <TextImage>
              {item.description}
            </TextImage>

          </ContainerDescription>
        
        </ContainerChildren>
      ))}

    </ContainerCards>
    </Container>
  );
}

Lab.propTypes = {
  dataWork: PropTypes.objectOf.isRequired,
}

export default Lab;
