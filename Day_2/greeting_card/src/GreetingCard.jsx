import React from 'react'

function GreetingCard ({name, message,color})  {
 const cardStyle={
        backgroundColor: color,
        padding: '20px',
        margin: '10px',
        borderRadius: '8xp',
        color: 'white'
    }

  return (
   
    <div  style={cardStyle}>

    <h2>Hello,{name}</h2>
    <p>{message}</p>

    </div>
  )
}

export default GreetingCard