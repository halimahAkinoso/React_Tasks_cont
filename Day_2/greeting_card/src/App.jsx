import React from 'react'
import GreetingCard from './GreetingCard'

function App () {
  return (
    <div>
<GreetingCard 
name="Tunde" message="Hope you have a great day!" color="#4682b4"/>

<GreetingCard
name="Ramlah" message="Thinking of you always darling daughter" 
color="#ff6347"/>
<GreetingCard
name="Halimat" message="Wishing you all the best!" color="#3cb371"/>
    </div>
  )
}

export default App