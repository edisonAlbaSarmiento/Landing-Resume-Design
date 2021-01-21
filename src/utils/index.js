import { keyframes} from 'styled-components';

export const animation = nameAnimation => {
  return keyframes`${nameAnimation}`;
}



export const sendFeedback = async (templateId, variables) => {
  const result = await window.emailjs.send(
    `${templateId}`, `${process.env.REACT_APP_TEMPLATE_ID}`,
    variables
  ).then(res => res.status)
  // Handle errors here however you like, or use a React error boundary
    .catch(err => err)
  return result
}
