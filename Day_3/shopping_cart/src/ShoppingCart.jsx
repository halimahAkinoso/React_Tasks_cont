import React from 'react'
import { useState} from 'react'

function ShoppingCart()  {
    const [CartItems, setCartItems] = useState([
        {name: 'Jollof Rice',price: 1500, quantity:2},
        {name: 'Platain', price: 1000, quantity:1}
    ] ); 
const handleIncreaseQuantity = (index) =>{
    const newCartItems = [...CartItems];
    if (newCartItems[index].quantity > 1){
        newCartItems[index].quantity -= 1; 
        setCartItems(newCartItems);
    };
}

    const handleDecreaseQuantity = (index) => {
        const newCartItems = [...CartItems];
        if(newCartItems[index].quantity > 1){
            newCartItems[index].quantity -= 1;
            setCartItems(newCartItems);
        }
    };


    const handleRemoveItem = (index) => {
        const newCartItems = CartItems.filter((_, i) => i !== i !== index);
        setCartItems(newCartItems);
    }

        const handleClearCart = () => {
            setCartItems([]);
        };
        
    const totalPrice = CartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );


  return (
    <div>
        <h1>Shopping Cart</h1>
        {CartItems.map((item, index) => (
            <div>
                <p>{item.name} - ₦{item.quantity} = ₦{item.price * item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
        ))}
        <h3>Total: ₦{totalPrice}</h3>
        <button onClick={handleClearCart}>Clear All Items</button>
        <p>Your Cart is Empty.</p>
    </div>
  );
}

export default ShoppingCart