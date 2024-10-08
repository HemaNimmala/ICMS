import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar'; // Import the Navbar
import Home from './components/Home';
import Contacts from './components/Contacts';
import Places from './components/Places';
import About from './components/About';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Check login state
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up

  const handleLogin = () => {
    // Dummy login function, you can replace it with actual login logic
    setIsAuthenticated(true);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <div className="App">
        {!isAuthenticated ? (
          <div>
            {isLogin ? <Login /> : <SignUp />}
            <button onClick={toggleForm} className="toggle-btn">
              {isLogin ? 'Go to Sign Up' : 'Go to Login'}
            </button>
            <button onClick={handleLogin} className="login-btn">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        ) : (
          <div>
            <Navbar /> {/* Navbar will appear after login */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/places" element={<Places />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
