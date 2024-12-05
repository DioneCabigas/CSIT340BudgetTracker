import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match the test credentials
    if (email === 'test@test.com' && password === 'test') {
      console.log("Login successful!");
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      console.log("Invalid credentials");
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
