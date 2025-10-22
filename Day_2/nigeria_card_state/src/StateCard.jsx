import React from 'react'

function StateCard ({state, capital, region, population}) {
let backgroundColor;
switch (region) {
    case 'North':
       backgroundColor = '#8B4513' 
        break;
    case 'South':
       backgroundColor = '#008751'
       break;
    case 'East':
       backgroundColor = '#FFD700'
      break;
    case 'West':
       backgroundColor = '#4169E1'
       break;
    
    default:
        backgroundColor = '#FFFFFF';
}
  return (
    <div className='state-card' style={{backgroundColor}}>
<h2>{state}State</h2>
<p>Capital: {capital}</p>
<p>Region: {region}</p>
<p>Population: {population}</p>
    </div>
  )
}

export default StateCard