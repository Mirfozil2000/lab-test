import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFakeStoreProducts } from '../store/actions/productActions';
import Product from '../components/Product';

function ProductList() {
  const dispatch = useDispatch();
  const { fakeStoreProducts, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchFakeStoreProducts()); 
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {fakeStoreProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;