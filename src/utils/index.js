export const sendFeedback = async (templateId, variables) => {
    console.log('ENTRO', process.env.REACT_APP_TEMPLATE_ID)
     const result = await window.emailjs.send(
        `${templateId}`, `${process.env.REACT_APP_TEMPLATE_IDs}`,
        variables
        ).then(res => {
            console.log('Email successfully sent!',res)
            return res.status; 
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => {
            console.log('Oh well, you failed. Here some thoughts on the error that occured:', err)
            return err;
        })
        return result
  
    }