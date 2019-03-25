import { 
  CONTACT_TYPING, 
  CONTACT_SEND_PENDING, 
  CONTACT_SEND_SUCCESS, 
  CONTACT_SEND_FAILED
} from '../../constants';

const contactFormState = {
    name: '', 
    email: '', 
    subject: '', 
    message: '', 
    sending: false, 
    sent: null, 
    error: null
}

export const contactFormReducers = (state=contactFormState, action={}) => {
  switch (action.type) {
    case CONTACT_TYPING:
      return {
        ...state, 
        [action.payload.name]: action.payload.value
      }
    case CONTACT_SEND_PENDING:
      return {
        ...state, 
        sending: true
      }
    case CONTACT_SEND_SUCCESS:
      return {
        ...state, 
        name: '', 
        email: '', 
        subject: '', 
        message: '', 
        sending: false, 
        sent: action.payload
      }
    case CONTACT_SEND_FAILED:
      return {
        ...state, 
        sending: false, 
        error: action.payload
      }
    default:
      return state
  }
}