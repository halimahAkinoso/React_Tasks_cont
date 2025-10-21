import React from 'react'

function ProductCard ({ name, price, image, inStock }) {
  const imgSrc = image || 'https://via.placeholder.com/160x160?text=Product'
  const formattedPrice = typeof price === 'number' ? `₦${price.toLocaleString()}` : price

  return (
    <div className='product-card'>
      <img src={imgSrc} alt={name} className='product-image' />
      <h3 className='product-name'>{name}</h3>
      <p className='product-price'>{formattedPrice}</p>
      <p className={inStock ? "in-stock" : "out-of-stock"}>{inStock ? "In stock" : "Out of stock"}</p>
    </div>
  );
}

export default ProductCard