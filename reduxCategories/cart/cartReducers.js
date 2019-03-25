import {
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  PURCHASE_PENDING, 
  PURCHASE_SUCCESS, 
  PURCHASE_FAILED,
  CHOOSE_LICENSE
} from '../../constants';

import BeatList from '../../components/BeatList';

const initialBeat = BeatList.filter((beat) => {
  return(
      beat.featured
  )
})

const initialCartState = {
  cart: [], 
  totalPrice: 0, 
  loading: false, 
  success: false, 
  select: "wav", 
  song: initialBeat[0]
}


export const cartReducers = (state=initialCartState, action={}) => {
  switch (action.type) {
    
    case ADD_TO_CART:
      let newCart = [...state.cart];
      let song = action.payload.song;
      let type = action.payload.type;
      newCart = [...newCart,{song, type}]
      let sum = 0;
      for(let i = 0;i < newCart.length; i++){
        sum += newCart[i].type.numPrice;
      }
      return {...state, cart: newCart, song: song, totalPrice: sum}
    
    case REMOVE_FROM_CART:
      newCart = [...state.cart];
      newCart.splice(action.payload,1);
      sum = 0;
      for(let i = 0;i < newCart.length; i++){
        sum += newCart[i].type.numPrice;
      }
      return {...state, cart: newCart, totalPrice: sum}
    
    case CHOOSE_LICENSE:
      return {...state, select: action.payload}
    
    case PURCHASE_PENDING:
      return {...state, loading: true}
    
    case PURCHASE_SUCCESS:
      return {
        ...state, 
        cart: [], 
        totalPrice: 0, 
        loading: false, 
        success: true
      }
    
    case PURCHASE_FAILED:
      return {...state, loading: false}
    
    default:
      return state
  }
}



