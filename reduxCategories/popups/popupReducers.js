import { 
  LEASE_POPUP, 
  EXCLUSIVE_POPUP, 
  CART_POPUP, 
  ADD_TO_CART_POPUP, 
  SUCCESS_POPUP, 
  CLOSE_POPUP
} from '../../constants';


const popupState = {
  popupType: "lease", 
  pop: false
}

export const popupReducers = (state=popupState, action={}) => {
  switch (action.type) {
    case LEASE_POPUP:
      return {
        ...state, 
        popupType: "lease",
        pop: true
      }
    case EXCLUSIVE_POPUP:
      return {
        ...state, 
        popupType: "exclusive",
        pop: true
      }
    case CART_POPUP:
      return {
        ...state, 
        popupType: "cart",
        pop: true
      }
    case ADD_TO_CART_POPUP:
      return {
        ...state, 
        popupType: "addToCart",
        pop: true, 
        song: action.payload
      }
    case SUCCESS_POPUP:
      return {
        ...state, 
        popupType: "success",
        pop: true
      }
    case CLOSE_POPUP:
      if (action.payload.class === "close" || action.payload.cart === "addToCart") {
      return {
        ...state, 
        pop: false
      }}
    default:
      return state
  }
}