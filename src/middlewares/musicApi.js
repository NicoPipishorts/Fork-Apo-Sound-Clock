// == IMPORT NPM
import axios from "axios";
import FormData from "form-data";

// == IMPORT ASSETS
import {
    GET_MUSICS_LIST, 
    setMusicsList, 
    SEND_MUSIC,
    resetMusicState,
    setProgress,
    setErrorCode
} from '../actions/musics';

const musicApi = (store) => (next) => (action) =>{

  //const picture = "test-picture";
  //const file = "test-file";
  const { musics: { 
    title, 
    file,
    picture,
    description,
    releaseDate,
    } } = store.getState();

    const { users : { user }} = store.getState();
      
    const formData = new FormData();
    formData.append('title', title);
    formData.append('user', user.id);
    formData.append('file', file);
    formData.append('picture', picture);
    formData.append('releasedate', '03-03-2022');
    //formData.append('releasedate', releaseDate);
    formData.append('description', description);

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
    case GET_MUSICS_LIST: 
      axios.get(`${baseURL}/api/musics/top10/like`)
      .then((response) => {
          console.log("coucou juju, me voici, la réponse de la requete: ",response);
          store.dispatch(setMusicsList(response.data));
        })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
        }); 
      break;

    case SEND_MUSIC: 
      axios.post(
      `${baseURL}/api/musics`,
      formData, 
      config
      ).then((response) => {        
          // console.log('Le data a était envoyé, all is good.',response);
          // console.log("je suis la reponse.status",response.status);
          store.dispatch(resetMusicState(response.status));
        })
      /* .then((response) => {
        console.log("je suis la reponse.status",response.status);
      }); */
      .catch((error) => {
        // eslint-disable-next-line no-console
        store.dispatch(setErrorCode(error.response.data.error))
        /* console.log("je suis la reponse.status",error.response.data.error); */
        console.log('Music Upload Error', error);
      }); 
      break;
    default:
    next(action);   
  }
};
export default musicApi;