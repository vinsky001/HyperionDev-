import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Routes>
        {/* Define route for Login */}
        <Route path="/" element={<Login onAuthentication={handleAuthentication} />} />
        
        {/* route to dashboard */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? (
            <>
              <Navigate to="/dashboard/welcome" />
              <Dashboard />
            </>
          ) : (
            <Navigate to="/" />
          )}
        />        
        <Route
          path="/dashboard/welcome"
          element={isAuthenticated ? <h1>Hello, you are logged in</h1> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
