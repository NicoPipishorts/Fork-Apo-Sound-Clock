import {
    SET_RESEARCH_FIELD, SET_SEARCH_RESULTS
    } from '../actions/research';
    
    export const initialState = {
      research: '',
      showResults: false,
      list: [],
    };
    
    // A noter : pour le reducer userReducer, seule la tranche user est visible !
    const reducer = (state = initialState, action = {}) => {
      switch (action.type) {  
        case SET_RESEARCH_FIELD :
          return {
            ...state,
            [action.name]: action.value,
          };
          case SET_SEARCH_RESULTS :
            return {
              ...state,
              showResults: true,
              list: action.list,
            };
        default:
          return state;
      }
    };
    
    export default reducer; 