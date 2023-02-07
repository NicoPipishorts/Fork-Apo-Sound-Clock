// ACTION TYPE SET_MUSIC_FIELD
export const SET_MUSIC_FIELD = 'SET_MUSIC_FIELD';
// Set music fields in the upload new music modal
export const setMusicField = (value, name) => ({
  type: SET_MUSIC_FIELD,
  name,
  value,
});

// ACTION TYPE SEND_MUSIC
export const SEND_MUSIC = 'SEND_MUSIC';
// Action Creator sendMusic
export const sendMusic = (dateValue) => ({
  type: SEND_MUSIC,
  dateValue,
});

// ACTION TYPE GET_MUSICS_LIST
export const GET_MUSICS_LIST = 'GET_MUSICS_LIST';
// Set music fields in the upload new music modal
export const getMusicsList = () => ({
  type: GET_MUSICS_LIST,
});

// ACTION TYPE SET_MUSICS_LIST
export const SET_MUSICS_LIST = 'SET_MUSICS_LIST';
// Set music fields in the upload new music modal
export const setMusicsList = (musicList) => ({
  type: SET_MUSICS_LIST,
  musicList,
});

// ACTION TYPE RESET_MUSIC_STATE
export const RESET_MUSIC_STATE = 'RESET_MUSIC_STATE';
// Reset the state of the music reducer
export const resetMusicState = (errorCode) => ({
  type: RESET_MUSIC_STATE,
  errorCode,
});

// ACTION TYPE SET_PROGRESS
export const SET_PROGRESS = 'SET_PROGRESS';
// Reset the state of the music reducer
export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  progress,
});

// ACTION TYPE SET_ERROR_CODE
export const SET_ERROR_CODE = 'SET_ERROR_CODE';
// Reset the state of the music reducer
export const setErrorCode = (code) => ({
  type: SET_ERROR_CODE,
  code,
});