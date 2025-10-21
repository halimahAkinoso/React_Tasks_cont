import React from 'react'
import ProductCard from './ProductCard'
import phone1 from './assets/phone 1.avif'
import phone2 from './assets/phone 2.avif'

function App ()  {
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
      <ProductCard 
      image={phone1}
      name="Infinix Smart 8"
      price={95000}
      inStock={true}/>

      <ProductCard 
      image={phone2}
      name="Techno Pop 8"
      price={105000}
      inStock={false}/>

    </div>
  );
}

export default App