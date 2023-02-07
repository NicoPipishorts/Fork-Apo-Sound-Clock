// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
    SEARCH, setSearchResults,
} from '../actions/research';

const researchApi = (store) => (next) => (action) =>{

  switch (action.type) {

    case SEARCH : 
    const { research: {research}} = store.getState();
    console.log(research);
      axios.post('http://denisjulien-server.eddi.cloud/projet-9-sound-clock-back/public/api/research',{ research })
      .then((response) => {
          console.log('this is the search results : ', response.data);
          store.dispatch(setSearchResults(response.data));
        })
      .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
        });
      break;
    default:
    next(action);   
  }
};
export default researchApi;