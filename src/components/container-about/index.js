import React from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  Line,
  ContainerCards,
  Card,
  TitleName
} from './styles';

function index() {
  return (
    <Container>
      <ContainerTitle>
        <Title>
          About
        </Title>
        <Line />
      </ContainerTitle>
    <ContainerCards>
      <Card>
        <TitleName>
          Edison
        </TitleName>
        <TitleName>
          Alba
        </TitleName>
      </Card>
      <Card>2</Card>
    </ContainerCards>
    </Container>
  );
}

export default index;
