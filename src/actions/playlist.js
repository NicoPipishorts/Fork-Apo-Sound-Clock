// ACTION TYPE GET_PLAYLISTS_LIST
export const GET_PLAYLISTS_LIST = 'GET_PLAYLISTS_LIST';

// ACTION CREATOR getPlaylistsList
export const getPlaylistsList = () => ({
  type: GET_PLAYLISTS_LIST,
});

// ACTION TYPE SET_PLAYLISTS_LIST
export const SET_PLAYLISTS_LIST = 'SET_PLAYLISTS_LIST';

// ACTION CREATOR setPlaylistsList
export const setPlaylistsList = (playlistsList) => ({
  type: SET_PLAYLISTS_LIST,
  playlistsList,
});

//* GETTER SETTER FOR THE PLAYLIST BY ID
// ACTION TYPE SET_PLAYLIST_BY_ID
export const GET_PLAYLIST_BY_ID = 'GET_PLAYLIST_BY_ID';

// ACTION CREATOR getPlaylistByID
export const getPlaylistByID = (id) => ({
  type: GET_PLAYLIST_BY_ID,
  id,
});

// ACTION TYPE SET_PLAYLIST_BY_ID
export const SET_PLAYLIST_BY_ID = 'SET_PLAYLIST_BY_ID';

// ACTION CREATOR setPlaylistById
export const setPlaylistById = (details) => ({
  type: SET_PLAYLIST_BY_ID,
  details,
});

