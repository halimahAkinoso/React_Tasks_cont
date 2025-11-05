import React, { useState } from 'react';
import './GitHubSearch.css'; // Assuming you have a CSS file for styling

function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ... (rest of the component logic)
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const userJson = await userResponse.json();
      setUserData(userJson);

      const reposResponse = await fetch(userJson.repos_url);
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const reposJson = await reposResponse.json();
      setRepos(reposJson);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


 return (
  <div className="github-search-container">
    <h1>GitHub User Search</h1>
    <div className="search-bar">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>

    {loading && <p className="loading">Loading...</p>}

    {error && <p className="error">{error}</p>}

    {userData && (
      <div className="user-info">
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
        <h2>{userData.name || userData.login}</h2>
        <p>{userData.bio}</p>
        <p>Followers: {userData.followers} | Following: {userData.following}</p>
        <p>Public Repos: {userData.public_repos}</p>
      </div>
    )}

    {repos.length > 0 && (
      <div className="repo-list">
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              {repo.description && <p>{repo.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}

export default GitHubSearch;