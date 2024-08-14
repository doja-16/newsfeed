// src/Components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';
import appleIcon from '../Assets/apple.png';
import googleIcon from '../Assets/google.png';
import dailyIcon from '../Assets/daily.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth for authentication

const Login = ({ switchToRegister, onLoginSuccess }) => {
  const navigate=useNavigate();
  const { login } = useAuth(); // Use login function from context
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:9001/dona/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        if(email==="donajaprin@dailybugle.com" && password==="dona2005"){
          navigate("/admin/activity")
        }
        const userName = email.split('@')[0];
        login(userName);
        onLoginSuccess();
      } else {
        const errorMessage = await response.text();
        if (errorMessage === 'Email does not exist') {
          setError('Email does not exist');
        } else if (errorMessage === 'Incorrect password') {
          setError('Incorrect password');
        } else {
          setError('An unknown error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="login-container">
      <img className='daily' src={dailyIcon} alt="Daily" />
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className='login-text'>Login to your account</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'LOGIN'}
        </button>
        <p className='act'>Don’t have an account? <Link to="#" onClick={switchToRegister}>Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
