// ACTION TYPE SET_USER_FIELD
export const SET_USER_FIELD = 'SET_USER_FIELD';

// ACTION CREATOR setUserField
export const setUserField = (value, name) => ({
  type: SET_USER_FIELD,
  name,
  value,
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE GET_USERS_LIST
export const GET_USERS_LIST = 'GET_USERS_LIST';

// ACTION CREATOR getUsersList
export const getUsersList = () => ({
  type: GET_USERS_LIST,
});

// ACTION TYPE SET_USERS_LIST
export const SET_USERS_LIST = 'SET_USERS_LIST';

// ACTION CREATOR setUsersList
export const setUsersList = (usersList) => ({
  type: SET_USERS_LIST,
  usersList,
});

// ACTION TYPE GET_USER_WITH_SLUG
export const GET_USER_WITH_SLUG = 'GET_USER_WITH_SLUG';

// ACTION CREATOR getUserWithSlug
export const getUserWithSlug = (user) => ({
  type: GET_USER_WITH_SLUG,
  slug: user,
});

// ACTION TYPE SAVE_USER_WITH_SLUG
export const SAVE_USER_WITH_SLUG = 'SAVE_USER_WITH_SLUG';

// ACTION CREATOR getUserWithSlug
export const saveUserWithSlug = (user) => ({  
  type: SAVE_USER_WITH_SLUG,
  user,
});

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

 // ACTION TYPE CREATE_USER
export const CREATE_USER = 'CREATE_USER';

// ACTION CREATOR creatUser
export const creatUser = (value, name) => ({
  type: CREATE_USER,
  name,
  value,
}); 

// ACTION TYPE UPDATE_PROFILE
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
// Action Creator sendMusic
export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

// ACTION TYPE GET_UPDATED_USER
export const GET_UPDATED_USER = 'GET_UPDATED_USER';
// Action Creator getUpdatedUser
export const getUpdatedUser = (data) => ({
  type: GET_UPDATED_USER,
  slug: data.slug,
  status: data.status,
});

// ACTION TYPE SAVE_UPDATED_USER
export const SAVE_UPDATED_USER = 'SAVE_UPDATED_USER';
// Action Creator getUpdatedUser
export const saveUpdatedUser = (user) => ({
  type: SAVE_UPDATED_USER,
  user
});

// ACTION TYPE GET_LOGGED_USER
export const GET_LOGGED_USER = 'GET_LOGGED_USER';
// Action Creator getLoggedUser
export const getLoggedUser = (slug) => ({
  type: GET_LOGGED_USER,
  slug
});

// ACTION TYPE SAVE_LOGGED_USER
export const SAVE_LOGGED_USER = 'SAVE_LOGGED_USER';
// Action Creator saveLoggedUser
export const saveLoggedUser = (user) => ({
  type: SAVE_LOGGED_USER,
  user,
});

// ACTION TYPE SET_ERROR_MAIL_CREATE
export const SET_ERROR_MAIL_CREATE = 'SET_ERROR_MAIL_CREATE';
// Action Creator saveLoggedUser
export const setErrorMailCreate = (code) => ({
  type: SET_ERROR_MAIL_CREATE,
  code
});
