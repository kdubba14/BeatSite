import { 
  LEASE_POPUP, 
  EXCLUSIVE_POPUP, 
  CART_POPUP, 
  ADD_TO_CART_POPUP, 
  SUCCESS_POPUP, 
  CLOSE_POPUP
} from '../../constants';

import BeatList from '../../components/BeatList';

const initialBeat = BeatList.filter((beat) => {
  return(
      beat.featured
  )
})


const popupState = {
  popupType: "lease", 
  pop: false, 
  song: initialBeat[0], 
  featuredSong: initialBeat[0]
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
      if (action.payload === "close") {
      return {
        ...state, 
        pop: false
      }}
    default:
      return state
  }
}