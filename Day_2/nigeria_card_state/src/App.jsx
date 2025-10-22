import React from 'react'
import StateCard from './StateCard';
import './App.css';

function App  () {
  return (
    <div className='App-container'>
  <h1>Nigeria State and Their Capital</h1>
  <div className='cards-container'>

  
<StateCard 
state = "Lagos"
capital = "Ikeja"
region = "South"
population ="21 million"/>


<StateCard 
state = "Kano"
capital = "kano"
region = "North"
population ="15 million"/>


<StateCard 
state = "Anambra"
capital = "Awka"
region = "East"
population ="5.5 million"/>
    </div>
    </div>
  );
};
export default App