import {
  PLAY_SONG_FEATURED, 
  PLAY_SONG_SELECTED
} from '../../constants';

export const playFeatured = () => ({
  type: PLAY_SONG_FEATURED
})

export const playSelected = (song) => ({
  type: PLAY_SONG_SELECTED, 
  payload: song
})

