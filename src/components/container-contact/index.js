/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
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
  TextError,
} from './styles';
import sendFeedback from '../../utils';


function Contact({selectedLanguage}){
  return (
    <div>
      <Formik
        initialValues={{ email: '', fullName: '', position: '', company:'', description: '' }}
        validate={values => {
          const errors = {};
          if (!values.fullName) {
            errors.fullName = 'Required';
          }
          if (!values.description) {
            errors.description = 'Required';
          }
          if (!values.company) {
            errors.company = 'Required';
          }
          if (!values.position) {
            errors.position = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(async() => {
            const response = await sendFeedback('sendgrid', {message_html: `${values.fullName}<br/> ${values.description}<br/> ${values.company}<br/> ${values.position}<br/>`, from_name: `${values.email}`, reply_to: ''})
            if(response === 200){
              alert('Mensaje enviado con exito');
            }else {
              alert('Algo salio mal, no se envio el mensaje');
            }
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
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
              <Form  onSubmit={handleSubmit}>
                <ContainerAbout>
                  <TitleTextTarea>
                    {selectedLanguage === 0 ? 'Project brief description': 'Breve descripción del proyecto'}
                  </TitleTextTarea>
                  <TextTarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={selectedLanguage === 0 ? 'Project Type, Target customer, timeline, estimate etc' : 'Tipo de proyecto, cliente objetivo, cronograma, estimación, etc.'}
                    maxLength="300"
                  />
                  <TextError>
                    {errors.description && touched.description && errors.description}
                  </TextError>
                </ContainerAbout>
                <ContainerAbout>
                  <TitleTextTarea>
                    {selectedLanguage === 0 ? 'Project brief description': 'Breve descripción del proyecto'}
                  </TitleTextTarea>
                  <ContainerInputs>
                    <Input
                      name="fullName"
                      placeholder={selectedLanguage === 0 ? 'Full Name': 'Nombre completo'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                    />
                    {/* <TextError>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </TextError> */}
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder={selectedLanguage === 0 ? 'Email Address': 'Dirección de correo electrónico'}
                    />
                    <TextError>
                      {errors.email && touched.email && errors.email}
                    </TextError>
                    <Input
                      name="company"
                      placeholder={selectedLanguage === 0 ? 'Company Name': 'Nombre de empresa'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company}
                    />
                    {/* <TextError>
                      {errors.company && touched.company && errors.company}
                    </TextError> */}
                    <Input
                      name="position"
                      placeholder={selectedLanguage === 0 ? 'Position': 'Posición'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.position}
                    />
                    {/* <TextError>
                      {errors.position && touched.position && errors.position}
                    </TextError> */}
                    <ContaninerButton>
                      <ButtonSubmit>
                        <TextButton type="submit" disabled={isSubmitting}>
                          {selectedLanguage === 0 ? 'Request a Quote': 'Solicitar presupuesto'}
                        </TextButton>
                      </ButtonSubmit>
                    </ContaninerButton>
                  </ContainerInputs>
                </ContainerAbout>
              </Form>
            </ContainerCards>
          </Container>
        )}
      </Formik>
    </div>
  )
}

Contact.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
}

export default Contact;
