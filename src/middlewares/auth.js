// == IMPORT NPM
import axios from 'axios';

// == IMPORT ASSETS
import {
  LOGIN, 
  GET_USER_WITH_SLUG,
  saveUserWithSlug,
  GET_LOGGED_USER,
  saveLoggedUser,
  getLoggedUser,
} from '../actions/user';

// on crée une instance d'axios
// on va pouvoir se configurer cette instance
// avant de s'en servir

const baseURL = 'http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public'

const authMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { users: { email, password } } = store.getState();
      const username = email;
      // console.log('etape : 3 je passe par le middleware login je vais au get user : ', name, password);

      // Send request with User Login for JWT Token
      axios.post(`${baseURL}/api/login_check`, {
        username,
        password,
      }).then(
        (response) => {
          localStorage.setItem('userToken', response.data.token);

          console.log('etape : 4 réponse positive je passe au reducer');
          const token = response.data.token;
          let base64Url = token.split('.')[1];
          let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          const payload =  JSON.parse(jsonPayload);
          store.dispatch(getLoggedUser(payload.slug));   
        },
        ).catch(
          (error) => console.log('Login error : ' , error),
        );
  
    }
    break;

    case GET_USER_WITH_SLUG: 

      // console.log('Get User With slug prop passed to middleware ',action.slug);
      // console.log('voici la route de l\'api : ', `${baseURL}/api/user/${action.slug}`);
      axios.get(`${baseURL}/api/user/${action.slug}`).then(
        (response) => {
          //console.log('je suis le response du get user with slug', response);
          store.dispatch(saveUserWithSlug(response.data));   
        },
      ).catch(
        () => console.log('Get User By Slug Error'),
      );

    break;
    
    //* Action Type to recover logged user from Token
    case GET_LOGGED_USER: 

      // console.log('voici la route de l\'api pour get logged user: ', `${baseURL}/api/user/${action.slug}`);
      axios.get(`${baseURL}/api/user/${action.slug}`).then(
        (response) => {
          //console.log('je suis le response du get user with slug', response.data);
          store.dispatch(saveLoggedUser(response.data));   
        },
      ).catch(
        (error) => console.log('Get Logged User by Slug : error : ', error),
      );
      
    break;
    
  default:
    next(action);
  }
};

export default authMiddleWare;
