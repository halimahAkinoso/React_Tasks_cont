// import React from 'react'
import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput.jsx'
import FahrenheitInput from './FahrenheitInput.jsx';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}


function TemperatureApp() {
      const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (value) => {
    setScale('c');
    setTemperature(value);
  };

    const handleFahrenheitChange = (value) => {
    setScale('f');
    setTemperature(value);
  };

    const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;


  return (
    <div>
    <h1>Temperature Converter</h1>
      <CelsiusInput temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
    
    </div>
  )
}

export default TemperatureApp