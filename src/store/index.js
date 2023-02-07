import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
// import apiMiddleWare from 'src/middlewares/api';
// on importe le middleware d'authentification
import authMiddleWare from '../middlewares/auth';
import musicApi from '../middlewares/musicApi';
import usersApi from '../middlewares/usersApi';
import playlistApi from '../middlewares/playlistApi';
import researchApi from '../middlewares/researchApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(authMiddleWare, musicApi, usersApi, playlistApi, researchApi ),
);

const store = createStore(reducer, enhancers);

export default store;