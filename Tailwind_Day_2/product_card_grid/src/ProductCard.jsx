// ProductGrid.jsx
import React from 'react';

const products = [
  { name: 'Jollof Rice', price: '₦1,500', image: 'https://cheflolaskitchen.com/wp-content/uploads/2025/07/Jollof-Rice-1080x1080.jpg.webp' },
{ name: 'Ankara Fabric', price: '₦5,000', image: 'https://jaybecksstore.com/wp-content/uploads/2023/02/AdobeStock_63063995-1-1400x933.jpeg' },

   { name: 'Suya', price: '₦1,000', image: 'https://www.foodfidelity.com/wp-content/uploads/2020/01/beef-suya-vert-1-2-compressor.jpg' },

  { name: 'Aso-Ebi', price: '₦15,000', image: 'https://www.eventdesignbybe.com/wp-content/uploads/2024/06/Nigerian-Wedding-Ceremony-Traditions-Aso-Ebi-Full-Family-1024x683.jpg' },
{ name: 'Palm Wine', price: '₦1,200', image: 'https://www.emaketa.com/wp-content/uploads/2025/05/palm-wine.jpg' },
  { name: 'Agbada', price: '₦25,000', image: 'https://otunbastore.com/cdn/shop/products/il_fullxfull.5295791494_s3pw.jpg?v=1698360273&width=600' },
{ name: 'Chin Chin', price: '₦1,200', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/LoveChinChin.jpg/500px-LoveChinChin.jpg' },

    { name: 'Puff Puff', price: '₦300', image: 'https://www.africanbites.com/wp-content/uploads/2012/11/IMG_5013.jpg' }

];

const ProductCard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Solace Product Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            {/* <span>🍛</span> */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-green-600 font-bold mb-2">{product.price}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;