const initialState = {
    fakeStoreProducts: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FAKE_STORE_PRODUCTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_FAKE_STORE_PRODUCTS_SUCCESS':
        return {
          ...state,
          fakeStoreProducts: action.payload,
          loading: false,
        };
      case 'FETCH_FAKE_STORE_PRODUCTS_FAILURE':
        return {
          ...state,
          error: action.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;