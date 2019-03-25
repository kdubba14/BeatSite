import {
  PLAY_SONG_FEATURED, 
  PLAY_SONG_SELECTED
} from '../../constants';

import BeatList from '../../components/BeatList';

const initialBeat = BeatList.filter((beat) => {
  return(
      beat.featured
  )
})

const initialSongState = {
  code: initialBeat[0].code,
  color: initialBeat[0].color, 
  autoplay: "false",  
  featuredBeat: initialBeat[0]
}

export const playSongReducers = (state=initialSongState, action={}) => {
  switch (action.type) {
    case PLAY_SONG_FEATURED:
      return {
        ...state, 
        code: initialBeat[0].code,
        color: initialBeat[0].color, 
        autoplay: "true", 
        song: initialBeat[0]
      }
    case PLAY_SONG_SELECTED:
      return {
        ...state, 
        code: action.payload.code, 
        color: action.payload.color,
        autoplay: "true", 
        song: action.payload
      }
    default:
      return state
  }
}