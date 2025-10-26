import React from 'react'
import { useState } from 'react';

const products = [
  { name: 'Laptop', price: 450000, inStock: true, category: 'Electronics' },
  { name: 'T-shirt', price: 5000, inStock: false, category: 'Clothing' },
  { name: 'Milk', price: 1500, inStock: true, category: 'Food' },
  { name: 'Mouse', price: 12000, inStock: true, category: 'Electronics' },
  { name: 'Jeans', price: 15000, inStock: true, category: 'Clothing' },
];


function ProductCatalog () {

    const [filter, setFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('None'); // 'None', 'LowToHigh', 'HighToLow'

      const filteredAndSortedProducts = products
    .filter(product => {
      if (filter === 'All') return true;
      return product.category === filter;
    })
    .sort((a, b) => {
      if (sortOrder === 'LowToHigh') {
        return a.price - b.price;
      }
      if (sortOrder === 'HighToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
       <div>
      <h1>Product Catalog</h1>
      <div>
        Filter:
        {['All', 'Electronics', 'Clothing', 'Food'].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div>
        Sort by Price:
        <button onClick={() => setSortOrder('LowToHigh')}>Low to High</button>
        <button onClick={() => setSortOrder('HighToLow')}>High to Low</button>
      </div>
      <div>
        {filteredAndSortedProducts.map(product => (
          <div key={product.name} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>Price: ₦{product.price.toLocaleString()}</p>
            {product.inStock ? (
              <button>Add to Cart</button>
            ) : (
              <span style={{ color: 'red' }}>Out of Stock</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog