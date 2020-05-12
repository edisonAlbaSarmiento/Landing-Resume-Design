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

  // const response = await sendFeedback('sendgrid', {message_html: `${name}<br/> <br/> ${comapny}<br/> ${position}<br/> ${desdripcion}<br/>`, from_name: `${email}`, reply_to: 'edison.alba@imaginamos.com.co'})
  // console.log('RESP=OS', response.status)
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
/* eslint-disable react/jsx-filename-extension */
// import React from 'react'; ejmplo de form formik
// import { Formik } from 'formik';

// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 1000);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;

