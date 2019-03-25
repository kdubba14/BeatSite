import { 
  CONTACT_TYPING, 
  CONTACT_SEND_PENDING, 
  CONTACT_SEND_SUCCESS, 
  CONTACT_SEND_FAILED
} from '../../constants';

import axios from 'axios';

export const changeMessage = (e) => ({
  type: CONTACT_TYPING, 
  payload: {
    name: e.target.name, 
    value: e.target.value
  }
})

export const sendMessage = (e) => (dispatch, state) => {
  e.preventDefault()
  dispatch({type: CONTACT_SEND_PENDING})
  
  axios.post('/api/mailer', {
  name: state().contactFormReducers.name, 
  email: state().contactFormReducers.email, 
  subject: state().contactFormReducers.subject, 
  message: state().contactFormReducers.message
  })
    .then(data => dispatch({type: CONTACT_SEND_SUCCESS, payload: data}))
    .catch(err => dispatch({type: CONTACT_SEND_FAILED, payload: err}))
}

