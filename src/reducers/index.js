import { combineReducers } from 'redux';

import musicReducer from './musics';
import userReducer from './user';
import playlistReducer from './playlist';
import researchReducer from './research';

const rootReducer = combineReducers({
  users: userReducer,
  musics: musicReducer,
  playlists: playlistReducer,
  research: researchReducer,
});

export default rootReducer;