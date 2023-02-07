// ACTION TYPE SET_USER_FIELD
export const SET_RESEARCH_FIELD = 'SET_RESEARCH_FIELD';

// ACTION CREATOR setUserField
export const setResearchField = (value, name) => ({
  type: SET_RESEARCH_FIELD,
  name,
  value,
});

// ACTION TYPE SET_USER_FIELD
export const SEARCH = 'SEARCH';

// ACTION CREATOR changeModalState
export const search = (name) => ({
    type: SEARCH,
    name,
  });

  // ACTION TYPE SET_SEARCH_RESULTS
  export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
  
  // ACTION CREATOR setSearchResults
  export const setSearchResults = (list) => ({
      type: SET_SEARCH_RESULTS,
      list,
    });