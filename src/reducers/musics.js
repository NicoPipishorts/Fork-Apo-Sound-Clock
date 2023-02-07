import {
  SET_MUSIC_FIELD, 
  SET_MUSICS_LIST,
  RESET_MUSIC_STATE,
  SET_PROGRESS,
  SET_ERROR_CODE
} from '../actions/musics';

export const initialState = {
  // title of the file to upload
  title: '',
  // file to upload
  file: '',
  // cover photo for the song
  picture: '',
  // description of music to upload
  description: '',
  // initial release date of the song
  releaseDate: '',
  // is the song visible or not
  status: '1',
  // empty object for storing the musics list
  list : [],
  progress: '',
  errorCode:''
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MUSIC_FIELD:
      return {
        ...state,
        // pour définir dynamiquement la propriété d'un objet, on utilise la
        // notation "crochet"
        [action.name]: action.value,
      };

    case SET_MUSICS_LIST:
      return {
        ...state,
        list: action.musicList,
      };
      
    case RESET_MUSIC_STATE:
      return {
        ...state,
        errorCode: action.errorCode,
        title: '',
        file: '',
        picture: '',
        description: '',
        releaseDate: '',
      };

     case SET_PROGRESS: 
      return{
        ...state,
        progress: action.progress,
      };
      case SET_ERROR_CODE:
        return {
          ...state,
          errorCode: action.code,
        }  

    default:
      return state;
  }
};

export default reducer; 