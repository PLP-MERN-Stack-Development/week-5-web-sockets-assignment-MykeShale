import React, { useState } from 'react';
import Login from './Login.jsx';
import Chat from './Chat.jsx';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Chat username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App; 