import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';

function App() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get accessToken from localStorage
    const accessToken = localStorage.getItem('accessToken');

    // If accessToken exists, make the API call
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        // On success, update the states
        setIsLoggedIn(true);
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Authentication failed:', error);
      });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={username} /> // Pass username to Dashboard
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
