
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px'}} />
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
