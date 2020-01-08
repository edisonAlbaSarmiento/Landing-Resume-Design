import React from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  Line,
  ContainerCards,
  Card
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
      <Card>1</Card>
      <Card>2</Card>
    </ContainerCards>
    </Container>
  );
}

export default index;
