/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { storeToken } from '../services/authService';
import './css/Login.css'; // Import the CSS file


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser(email, password);
      storeToken(data.access, data.refresh); // Assuming your backend returns { token: "..." }
      alert('Login successful');
      window.location.href = '/home'; // Redirect to home page or dashboard
      // redirect or update UI here
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-prompt">
    Don't have an account? <a href="/signup" className="signup-link">Sign up here</a>
  </p>
    </div>
  );
};

export default Login;