import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/register.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Registration successful!');
      // Optionally, redirect to the login page
    } else {
      console.log('Registration failed:', data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={require('./assets/Background.jpg')} alt="Register Illustration" />
      </div>
      <div className="form-section">
        <h2>Sign up</h2>
        <p>Create your Budget Tracker account</p>

        <button className="social-button facebook">
          <FaFacebook style={{ marginRight: '8px' }} />
          Sign up with Facebook
        </button>

        <button className="social-button google">
          <FaGoogle style={{ marginRight: '8px' }} />
          Sign up with Google
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="continue-button">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
