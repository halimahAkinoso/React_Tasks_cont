// import React from 'react'
import React, { useState, useEffect } from 'react';
import './App.css';


const defaultTitle = "React App";

const TitleUpdater = () => {
 const [customTitle, setCustomTitle] = useState('');
  const [titleToDisplay, setTitleToDisplay] = useState(defaultTitle);
  const maxChars = 60;

  useEffect(() => {
  document.title = titleToDisplay;
}, [titleToDisplay]);

//handle user input and character count
const handleInputChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= maxChars){
        setCustomTitle(newTitle);
        setTitleToDisplay(newTitle ? `${defaultTitle} - ${newTitle}` : defaultTitle);
    }
  
}
  // add reset button

  const handleReset = () =>{
    setCustomTitle('');
    setTitleToDisplay(defaultTitle);
  }

  return (
    <div className='app-container'>
        <h1>Document Title Updater</h1>
        <h2>Custom Title:</h2>
        <input 
            type="text"
            value={customTitle}
            onChange={handleInputChange}
            placeholder='Type here ...'/>
        <p>Character count: {customTitle.length}/{maxChars}</p>
        <button onClick={handleReset} className='reset-button'>Reset to default</button>
        <h3>Preview: React App</h3>
        <p>{titleToDisplay}</p>
    </div>
  )

}
export default TitleUpdater