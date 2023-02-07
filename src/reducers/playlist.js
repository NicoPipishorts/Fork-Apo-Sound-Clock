import {
  SET_PLAYLISTS_LIST,
  SET_PLAYLIST_BY_ID
  } from '../actions/playlist';
  
  export const initialState = {
    list: [],
    selectState: false,
    details: [],
  };
  
  // A noter : pour le reducer userReducer, seule la tranche user est visible !
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {  
      case SET_PLAYLISTS_LIST:
        return {
          ...state,
          list: action.playlistsList,
        };

      case SET_PLAYLIST_BY_ID:
        // console.log('je suis dans le reducer voici les details de la playlist : ', action.details);
        return {
          ...state,
          selectState: true,
          details: action.details,
        };
      default:
        return state;
    }
  };
  
  export default reducer; 