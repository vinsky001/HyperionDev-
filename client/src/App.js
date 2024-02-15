import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';



const App = () => {
  // eslint-disable-next-line no-undef
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

return (
  <Router>
    <div>   

      <Routes>
        {/* Define routes for Login and Dashboard */}
        <Route
          path="/"
          element={<Login onAuthentication={handleAuthentication} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;