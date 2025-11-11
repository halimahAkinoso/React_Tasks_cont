import React, { useState } from 'react';
import ProductCatalog from './components/ProductCatalog';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('login'); // 'login' | 'signup' | 'catalog'

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setView('login');
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setView('catalog');
  };

  return (
    <div>
      {!currentUser && view === 'signup' && <SignUp onSignUp={handleSignUp} />}
      {!currentUser && view === 'login' && <Login users={users} onLogin={handleLogin} />}
      {!currentUser && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => setView('signup')}>Go to Sign Up</button>
          <button onClick={() => setView('login')}>Go to Login</button>
        </div>
      )}
      {currentUser && <ProductCatalog />}
    </div>
  );
}

export default App;