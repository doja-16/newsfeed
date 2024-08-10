import React, { useState } from 'react';
import '../styles/Register.css';
import axios from 'axios';
import appleIcon from '../Assets/apple.png';
import googleIcon from '../Assets/google.png';
import dailyIcon from '../Assets/daily.png';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Register = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    number: '', 
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:9001/dona/register', formData)
      .then((response) => {
        console.log('User registered:', response.data);
        switchToLogin(); // Switch to login after successful registration
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className='signbody'>
      <div className="sign-container">
        <img className='daily' src={dailyIcon} alt="Daily" />
        <form onSubmit={handleSubmit} className="sign-form">
          <h2 className='sign-text'>Sign Up your account</h2>
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="firstname" name="firstname" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile No:</label>
            <input type="tel" id="number" name="number" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="password" name="password" required onChange={handleChange} />
          </div>
          
          <button type="submit" className="sign-button">SIGN UP</button>
          <p className='act'>Already have an account? <Link to="#" onClick={switchToLogin}>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
