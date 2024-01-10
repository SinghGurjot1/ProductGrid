
import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductCard from './ProductCard'; 
import products from './products';

const ProductGrid = () => {
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortOption, setSortOption] = useState('price-asc');

  const handlePriceChange = (price) => {
    setMaxPrice(price);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const filteredAndSortedProducts = sortedProducts.filter(
    (product) => product.price <= maxPrice
  );

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="name-asc">Name (A to Z)</option>
          <option value="name-desc">Name (Z to A)</option>
        </select>
      </div>
      <PriceFilter onPriceChange={handlePriceChange} />
      <div className="products">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
