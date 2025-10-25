import React from 'react'

function FahrenheitInput ({ temperature, onTemperatureChange }) {
    const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
      <fieldset>
      <legend>Enter temperature in Fahrenheit:</legend>
      <input
        type="number"
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  )
}

export default FahrenheitInput