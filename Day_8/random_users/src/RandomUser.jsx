import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCount, setUserCount] = useState(0);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUser(data.results[0]);
      setUserCount(prevCount => prevCount + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

return (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
    <h1>Random User Generator</h1>
    <button
      onClick={fetchUser}
      style={{
        padding: '10px 15px',
        fontSize: '1em',
        marginBottom: '20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
      }}
    >
      Get New User
    </button>
    <p>Total Users Fetched: {userCount}</p>

    {loading && <p>Loading user data...</p>}

    {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    {user && !loading && !error && (
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          style={{ borderRadius: '50%', marginBottom: '10px' }}
        />
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>Email: {user.email}</p>
        <p>Location: {user.location.city}, {user.location.state}, {user.location.country}</p>
        <p>Phone: {user.phone}</p>
      </div>
    )}
  </div>
)};

export default RandomUser;