import React from 'react'
import { useState } from 'react';


const nigerianStates = [
  { name: 'Lagos', capital: 'Ikeja', region: 'South West' },
  { name: 'Abia', capital: 'Umuahia', region: 'South East' },
  { name: 'Adamawa', capital: 'Yola', region: 'North East' },
  { name: 'Akwa Ibom', capital: 'Uyo', region: 'South South' },
  { name: 'Anambra', capital: 'Awka', region: 'South East' },
  { name: 'Bauchi', capital: 'Bauchi', region: 'North East' },
  { name: 'Bayelsa', capital: 'Yenagoa', region: 'South South' },
  { name: 'Benue', capital: 'Makurdi', region: 'North Central' },
  { name: 'Borno', capital: 'Maiduguri', region: 'North East' },
  { name: 'Cross River', capital: 'Calabar', region: 'South South' },
  { name: 'Delta', capital: 'Asaba', region: 'South South' },
  { name: 'Ebonyi', capital: 'Abakaliki', region: 'South East' },
  { name: 'Edo', capital: 'Benin City', region: 'South South' },
  { name: 'Ekiti', capital: 'Ado-Ekiti', region: 'South West' },
  { name: 'Enugu', capital: 'Enugu', region: 'South East' },
  { name: 'Gombe', capital: 'Gombe', region: 'North East' },
  { name: 'Imo', capital: 'Owerri', region: 'South East' },
  { name: 'Jigawa', capital: 'Dutse', region: 'North West' },
  { name: 'Kaduna', capital: 'Kaduna', region: 'North West' },
  { name: 'Kano', capital: 'Kano', region: 'North West' },
  { name: 'Katsina', capital: 'Katsina', region: 'North West' },
  { name: 'Kebbi', capital: 'Birnin Kebbi', region: 'North West' },
  { name: 'Kogi', capital: 'Lokoja', region: 'North Central' },
  { name: 'Kwara', capital: 'Ilorin', region: 'North Central' },
  { name: 'Nasarawa', capital: 'Lafia', region: 'North Central' },
  { name: 'Niger', capital: 'Minna', region: 'North Central' },
  { name: 'Ogun', capital: 'Abeokuta', region: 'South West' },
  { name: 'Ondo', capital: 'Akure', region: 'South West' },
  { name: 'Osun', capital: 'Oshogbo', region: 'South West' },
  { name: 'Oyo', capital: 'Ibadan', region: 'South West' },
  { name: 'Plateau', capital: 'Jos', region: 'North Central' },
  { name: 'Rivers', capital: 'Port Harcourt', region: 'South South' },
  { name: 'Sokoto', capital: 'Sokoto', region: 'North West' },
  { name: 'Taraba', capital: 'Jalingo', region: 'North East' },
  { name: 'Yobe', capital: 'Damaturu', region: 'North East' },
  { name: 'Zamfara', capital: 'Gusau', region: 'North West' },
  { name: 'FCT', capital: 'Abuja', region: 'North Central' },
];
const regions = ['North', 'South', 'East', 'West'];


function StatesExplorer () {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeRegion, setActiveRegion] = useState('');


    const filteredStates = nigerianStates.filter(state => {
      const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          state.capital.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = activeRegion === '' || state.region.toLowerCase().startsWith(activeRegion.toLowerCase());
    return matchesSearch && matchesRegion;  
    })
  return (
   <div>
      <h1>NG Nigerian States</h1>
      <div>
        <label>Search: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {regions.map(region => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            style={{ fontWeight: activeRegion === region ? 'bold' : 'normal' }}
          >
            {region}
          </button>
        ))}
        <button onClick={() => setActiveRegion('')}>All</button>
      </div>
      <p>Total count of results: {filteredStates.length}</p>
      {filteredStates.length > 0 ? (
        <ul>
          {filteredStates.map(state => (
            <li key={state.name}>
              {state.name} - Capital: {state.capital} ({state.region})
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};


export default StatesExplorer