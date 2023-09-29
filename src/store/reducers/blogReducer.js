// src/store/reducers/blogReducer.js
const initialState = {
    teslaNews: [],
    loading: false,
    error: null,
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TESLA_NEWS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_TESLA_NEWS_SUCCESS':
        return {
          ...state,
          teslaNews: action.payload,
          loading: false,
        };
      case 'FETCH_TESLA_NEWS_FAILURE':
        return {
          ...state,
          error: action.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;
  