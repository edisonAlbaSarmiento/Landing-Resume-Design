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
  CardSubTilte,
  TextDescription,
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
          vijay verma.
        </TitleName>
        <SubTitle>
          Freelance Product Designer
        </SubTitle>
      </Card>
      <CardSubTilte>
        <TextDescription>
          Currently curating designs for new startups and  founders. also love 
          to code in Laravel  and Ruby
        </TextDescription>
      </CardSubTilte>

¡    </ContainerCards>
    </Container>
  );
}

export default index;
