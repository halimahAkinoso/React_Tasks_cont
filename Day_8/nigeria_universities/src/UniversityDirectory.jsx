import React, { useState, useEffect } from 'react';

const UniversityDirectory = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=Nigeria');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUniversities(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedUniversities = [...universities].sort((a, b) => a.name.localeCompare(b.name));

  const filteredUniversities = sortedUniversities.filter((uni) =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Nigerian Universities</h1>
      <p>Total count: {universities.length}</p>

      <input
        type="text"
        placeholder="Search universities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          fontSize: '1em',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredUniversities.map((uni, index) => (
          <li key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <strong>{uni.name}</strong>
            <br />
            {uni['state-province'] ? <span>State/Province: {uni['state-province']}</span> : <span>No state info</span>}
            <br />
            <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityDirectory;