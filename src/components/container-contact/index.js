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
  Form,
} from './styles';
import { sendFeedback } from '../../utils';


const name = 'Edison'
const email ='test@tes.com'
const comapny = 'imaginamos'
const position ='npse'
const desdripcion  =' sjdshdkshdkjsahdslahdls'


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange= (event) => {
    console.log('event.target.value',event.target.value)
    const name = event.target.name;
    const value = event.target.value;
    console.log('event.target.value',name)
    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    console.log('event.wwwwtarget.value',event.target.value)
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { selectedLanguage } = this.props;
    const { value } = this.state;
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
        <Form  onSubmit={this.handleSubmit}>
          <ContainerAbout>
            <TitleTextTarea value={value} >
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
              <Input 
                name="fullName"
                placeholder={selectedLanguage === 0 ? 'Full Name': 'Nombre completo'} 
                onChange={this.handleChange}
              />
              <Input 
                name="email"
                placeholder={selectedLanguage === 0 ? 'Email Address': 'Dirección de correo electrónico'} 
                onChange={this.handleChange}
              />
              <Input 
                name="comapany"
                placeholder={selectedLanguage === 0 ? 'Company Name': 'Nombre de empresa'} 
                onChange={this.handleChange}
              />
              <Input 
                name="position"
                placeholder={selectedLanguage === 0 ? 'Position': 'Posición'}
                onChange={this.handleChange}
              />
              <ContaninerButton>
                <ButtonSubmit>
                  <TextButton type="submit">
                    {selectedLanguage === 0 ? 'Request a Quote': 'Solicitar presupuesto'}
                  </TextButton>
                </ButtonSubmit>
              </ContaninerButton>
            </ContainerInputs>
          </ContainerAbout>
          </Form>
        </ContainerCards>
      </Container>
    
    );
  }
}

Contact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
}

export default Contact;
