/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Container,
  ContainerHeader,
  Line,
  ContainerCards,
  ContainerTitle,
  TextTarea,
  TitleTextTarea,
  ContainerAbout,
  ContainerInputs,
  Input,
  ButtonSubmit,
  TextButton,
  ContaninerButton,
} from './styles';
import { sendFeedback } from '../../utils';


const name = 'Edison'
const email ='test@tes.com'
const comapny = 'imaginamos'
const position ='npse'
const desdripcion  =' sjdshdkshdkjsahdslahdls'

const Contact = async ({selectedLanguage}) => {
  const response = await sendFeedback('sendgrid', {message_html: `${name}<br/> <br/> ${comapny}<br/> ${position}<br/> ${desdripcion}<br/>`, from_name: `${email}`, reply_to: 'edison.alba@imaginamos.com.co'})
  console.log('RESP=OS', response.status)
  return (
    <Container>
    <ContainerHeader>
      <ContainerTitle>
        <Title>
          {selectedLanguage === 0 ? 'Contact': 'Contacto'} 
        </Title>
        <Line />
      </ContainerTitle>
    </ContainerHeader>
    <ContainerCards>
        <ContainerAbout>
          <TitleTextTarea>
            {selectedLanguage === 0 ? 'Project brief description': 'Breve descripción del proyecto'} 
          </TitleTextTarea>
          <TextTarea 
            placeholder={selectedLanguage === 0 ? 'Project Type, Target customer, timeline, estimate etc' : 'Tipo de proyecto, cliente objetivo, cronograma, estimación, etc.'}
            maxLength="300"
          />
        </ContainerAbout>
        <ContainerAbout>
          <TitleTextTarea>
            {selectedLanguage === 0 ? 'Project brief description': 'Breve descripción del proyecto'}
          </TitleTextTarea>
          <ContainerInputs>
            <Input placeholder={selectedLanguage === 0 ? 'Full Name': 'Nombre completo'}/>
            <Input placeholder={selectedLanguage === 0 ? 'Email Address': 'Dirección de correo electrónico'}/>
            <Input placeholder={selectedLanguage === 0 ? 'Company Name': 'Nombre de empresa'}/>
            <Input placeholder={selectedLanguage === 0 ? 'Position': 'Posición'}/>
            <ContaninerButton>
              <ButtonSubmit>
                <TextButton>
                  {selectedLanguage === 0 ? 'Request a Quote': 'Solicitar presupuesto'}
                </TextButton>
              </ButtonSubmit>
            </ContaninerButton>
          </ContainerInputs>
        </ContainerAbout>
    </ContainerCards>
    </Container>
  );
}

Contact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
}

export default Contact;
