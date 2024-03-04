import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';

const App = () => {


  return (
    <Router>
      <Routes>
        {/* Define route for Login */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />       
        <Route
          path="/dashboard/welcome"
          element={Dashboard}
        // element={isAuthenticated ? <h1>Hello, you are logged in</h1> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;