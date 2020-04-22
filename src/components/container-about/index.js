import React, { useState } from 'react';
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
  Button1,
  Button2,
  TextButton,
  ContentButtons,
} from './styles';

function About() {
  const [activeButton, setActivButton] = useState(1);
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
      <Card>
        <ContentButtons>
            <Button1 activeButton={activeButton} onClick={() => setActivButton(1)}>
              <TextButton>
                Hire me
              </TextButton>
            </Button1>
            <Button2 activeButton={activeButton} onClick={() => setActivButton(2)}>
            <TextButton>
              Know more
            </TextButton>
            </Button2>
        </ContentButtons>
      </Card>
¡    </ContainerCards>
    </Container>
  );
}

export default About;
