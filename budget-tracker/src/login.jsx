import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        console.log(data.message);  // Login successful or invalid credentials message
        navigate('/dashboard'); // Redirect to the dashboard on success
      } else {
        const errorData = await response.json();
        console.log(errorData.message); // Display error message (e.g., invalid credentials)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={require('./assets/Background.jpg')} alt="Register Illustration" />
      </div>
      <div className="form-section">
        <h2>Sign in</h2>
        <p>to continue to Budget Tracker</p>

        <button className="social-button facebook">
          <FaFacebook style={{ marginRight: '8px' }} />
          Continue with Facebook
        </button>

        <button className="social-button google">
          <FaGoogle style={{ marginRight: '8px' }} />
          Continue with Google
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
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
          <button type="submit" className="continue-button">Continue</button>
        </form>

        <p>
          No account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
