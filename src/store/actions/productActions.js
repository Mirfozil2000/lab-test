import { getProducts } from '../../services/productService';

export const fetchFakeStoreProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_FAKE_STORE_PRODUCTS_REQUEST' });
    const products = await getProducts(); 
    dispatch({ type: 'FETCH_FAKE_STORE_PRODUCTS_SUCCESS', payload: products });
  } catch (error) {
    dispatch({ type: 'FETCH_FAKE_STORE_PRODUCTS_FAILURE', error: error.message });
  }
};
