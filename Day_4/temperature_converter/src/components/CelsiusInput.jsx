import React from 'react'

function CelsiusInput ({ temperature, onTemperatureChange }) {
      const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };
  return (
     <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        type="number"
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default CelsiusInput