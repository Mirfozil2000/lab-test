import React from 'react';
import './Product.css';

function Product({ product }) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default Product;