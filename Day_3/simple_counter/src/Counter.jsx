import React from 'react'
import { useState } from 'react'
function Counter () {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
   const decrement = () => {
        setCount(count - 1);
    };
      const reset = () => {
        setCount(0);
    };
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={(increment) => setCount(count + 1)}>+1</button>
    <button onClick={(decrement) => setCount(count - 1)}>-1</button>
    <button onClick={(reset) => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter