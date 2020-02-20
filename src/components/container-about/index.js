import React from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  Line,
  ContainerCards,
  Card,
  TitleName,
  SubTitle
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
          vijay
        </TitleName>
        <TitleName>
          verma
        </TitleName>
        <SubTitle>
          Freelance Product Designer
        </SubTitle>
      </Card>
¡    </ContainerCards>
    </Container>
  );
}

export default index;
