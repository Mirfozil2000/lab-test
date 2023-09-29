import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers/blogReducer';
import productReducer from './reducers/productReducer';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    products: productReducer,
  },
});

export default store;
