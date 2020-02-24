import React from 'react';
import {
  Container,
  ContainerTitle,
  Title,
  Line,
  ContainerCards,
  Card,
  TitleName,
  SubTitle,
  CardSubTilte
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
      </Card>
      <CardSubTilte>
        <SubTitle>
          Freelance Product Designer
        </SubTitle>
      </CardSubTilte>

¡    </ContainerCards>
    </Container>
  );
}

export default index;
