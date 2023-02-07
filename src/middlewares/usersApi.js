// == IMPORT NPM
import axios from "axios";
import FormData from "form-data";

// == IMPORT ASSETS
import {
  CREATE_USER,
  getUpdatedUser,
  GET_UPDATED_USER,
  GET_USERS_LIST, 
  saveUpdatedUser, 
  setErrorMailCreate, 
  setUsersList,
  UPDATE_PROFILE,
} from '../actions/user';

import {  
    setProgress,
    setErrorCode
} from '../actions/musics';


const usersApi = (store) => (next) => (action) =>{
      
  const formData = new FormData();

  let { users : {
    name,
    email,
    password,
    picture,
    description,
    label,
    user
  }} = store.getState();

  if(email !== '') {
    formData.append('email', email);
  }

  if(description !== ''){
    formData.append('description', description);
  }

  if(password !== ''){
    formData.append('password', password);
  }

  if(label !== '') {
    formData.append('label', label);
  }

  if(picture !== '') {
    formData.append('picture', picture);
  }

  const config = {
    headers: {
      "Content-type": "multipart/form-data"
    },
    onUploadProgress: data => {
      //Set the progress value to show the progress bar
      store.dispatch(setProgress(Math.round((100 * data.loaded) / data.total)))
      
    }

  };

  const baseURL = 'http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public';

  switch (action.type) {
   
    case CREATE_USER:
      axios.post(`${baseURL}/api/user/new` , {
        email,
        name,
        password  
      }, config
        ).then((response) => {
          console.log('Le data a était envoyé, all is good.',response);
          store.dispatch(setErrorMailCreate(response.status))
        })
        .catch((error) => {
          store.dispatch(setErrorMailCreate(error.response.data.error))
          console.log("je suis la reponse.status",error.response.data.error);
          console.log('error nul', error);
        });
      break;

    case GET_USERS_LIST: 
      axios.get(`${baseURL}/api/users/rand`)
      .then((response) => {
          store.dispatch(setUsersList(response.data));
        })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
        });
      break;

    case UPDATE_PROFILE:
        console.log('je récupére bien les info dans le middleware user : ');
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ' > ' + pair[1]); 
        }
        
        axios.post(`${baseURL}/api/user/edit/${user.id}`,
        formData, 
        config
          ).then((response) => {
            // console.log('Le user a était updaté, all is good.', response.status);
            const data = {slug: user.slug, status: response.status}
            store.dispatch(getUpdatedUser(data));
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            store.dispatch(setErrorCode(error.response.data.error))
            //* console.log("je suis la reponse.status",error.response.data.error); 
            console.log('Error while updating user data to the database : ', error);
          }); 
        
      break;

      case GET_UPDATED_USER: 
        axios.get(`${baseURL}/api/user/${action.slug}`)
        .then((response) => {
            const data = {user: response.data, status: action.status}
            store.dispatch(saveUpdatedUser(data));
          })
        .catch((error) => {
            console.log('Error while saving the updates for the user : ', error);
          });
        break;
    default:
    next(action);   
  }
};
export default usersApi;