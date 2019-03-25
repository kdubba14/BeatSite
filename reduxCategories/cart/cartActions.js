import {
  REMOVE_FROM_CART, 
  ADD_TO_CART, 
  PURCHASE_PENDING, 
  PURCHASE_SUCCESS, 
  PURCHASE_FAILED,
  CHOOSE_LICENSE
} from '../../constants';

import axios from 'axios'

export const removeFromCart = (key) => ({
  type: REMOVE_FROM_CART, 
  payload: key
});

export const addToCart = (song, type) =>  ({
  type: ADD_TO_CART, 
  payload: {
    song,
    type
  }
});

export const chooseLicense = (key) => ({
  type: CHOOSE_LICENSE, 
  payload: key
})

export const purchaseCart = (token) => (dispatch, state) => {
  
  

  dispatch({type: PURCHASE_PENDING})

  axios.post('/api/order', {
    stripeToken: token, 
    totPrice: 100, 
    /*totPrice: this.props.totalPrice()*100,  SET THIS */
    cart: state().cartReducers.cart
  })
    .then(data => dispatch({
      type: PURCHASE_SUCCESS, 
      payload: data})
    )
    .catch(err => dispatch({
      type: PURCHASE_FAILED, 
      payload: err})
    )

}

