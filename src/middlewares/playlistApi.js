// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
    GET_PLAYLISTS_LIST, 
    setPlaylistsList,
    GET_PLAYLIST_BY_ID,
    setPlaylistById
} from '../actions/playlist';

const playlistApi = (store) => (next) => (action) =>{

  const baseURL = 'http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public';

  switch (action.type) {

    case GET_PLAYLISTS_LIST : 
      axios.get(`${baseURL}/api/playlists/top10/like`)
      .then((response) => {
          // console.log('La liste des musiques',response);
          store.dispatch(setPlaylistsList(response.data));
        })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
        });
      break;

      case GET_PLAYLIST_BY_ID : 
        axios.get(`${baseURL}/api/playlists/${action.id}`)
        .then((response) => {
            // console.log('La playlist selectionné par id ici : ',response);
            store.dispatch(setPlaylistById(response.data));
          })
        .catch((error) => {
            console.log('Error de récuperation des de la playlist : ', error);
          });
        break;
    default:
    next(action);   
  }
};
export default playlistApi;