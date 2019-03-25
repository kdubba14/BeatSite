import { 
  LEASE_POPUP, 
  EXCLUSIVE_POPUP, 
  CART_POPUP, 
  ADD_TO_CART_POPUP, 
  SUCCESS_POPUP, 
  CLOSE_POPUP
} from '../../constants';

export const leasePopup = () => ({
  type: LEASE_POPUP
})

export const exclusivePopup = () => ({
  type: EXCLUSIVE_POPUP
})

export const cartPopup = () => ({
  type: CART_POPUP
})

export const addToCartPopup = (song) => ({
  type: ADD_TO_CART_POPUP, 
  payload: song
})

export const successPopup = () => ({
  type: SUCCESS_POPUP
})

export const closePopup = (e) => ({
  type: CLOSE_POPUP, 
  payload: {
    class: e.target.className, 
    cart: e
  }
})

