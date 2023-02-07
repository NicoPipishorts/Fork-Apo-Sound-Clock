import {
  SET_USER_FIELD, 
  SET_USERS_LIST, 
  SAVE_USER, 
  CREATE_USER, 
  LOGOUT,
  SAVE_USER_WITH_SLUG,
  SAVE_LOGGED_USER,
  SET_ERROR_MAIL_CREATE,
  SAVE_UPDATED_USER,
} from '../actions/user';

export const initialState = {
  // l'utilisateur est-il loggé
  logged: false,
  // token de l'utilisateur 
  token: '',
  // object with logged user deails
  user: [],
  // le pseudo de l'utilisateur
  name: '',
  // l'email de l'utilisateur
  email: '',
  // l'email de l'utilisateur
  label: '',
  // password de l'utilisateur
  password: '',
  // verification du nouveau mot de passe de l'utilisateur
  passwordVerif: '',
  //description
  description:'',
  // user picture
  picture: '',
  // Users List
  list: [],
  // if a user card is clicked, set to true
  userLoaded: false,
  // user info when card clicked 
  clickedUser: [],
  //Open or Close Login Modal
  loginButton: false,
  //Open or Close Create Modal
  createButton: false,
  errorCodeMail:'',
};

// A noter : pour le reducer userReducer, seule la tranche user est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER:
      return{
        ...state,
        [action.name]: action.value,

      }
    case SET_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_USERS_LIST:
      return {
        ...state,
        list: action.usersList,
      };   
    case SAVE_USER:
      // console.log('etape : 6, je passe le saveUser dans le reducer');
      return {
        ...state,
        logged: true,        
        email: action.user.username,
        token: action.user.token,
        user: action.user,
      };
    case SAVE_USER_WITH_SLUG:
      //console.log('etape : 5, je passe le saveUser dans le reducer', action.user);
      return {
        ...state,
        userLoaded : true,
        clickedUser: action.user,
      };
      case SAVE_LOGGED_USER:
        // console.log('etape : 5, je passe le saveUser dans le reducer');
        return {
          ...state,
          logged: true,     
          user: action.user,
        };
      case SAVE_UPDATED_USER:
        console.log(action.user);
        return {
          ...state,
          updated: true,    
          errorCodeMail: action.user.status,
          user: action.user.user,
        };
      case LOGOUT: 
        //* Empty local storage
        localStorage.removeItem('userToken'); 
        return {
          logged: false,
          toDashboard: false,
          username: '',
          password: '',
          email: '',
          list: '',
          loggedUser: '',
          decription: '',
          token: '',  
        };
      case SET_ERROR_MAIL_CREATE:
        console.log('je recupere le code')
        return {
          ...state,
          errorCodeMail: action.code,
        }
      
    default:
      return state;
  }
};

export default reducer;