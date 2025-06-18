/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { storeToken } from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser(email, password);
      storeToken(data.access, data.refresh);
      alert('Login successful');
      window.location.href = '/home';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500 ">
      <div className="h-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side (Orange Background) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-orange-300 p-8">
          <img src="src/assets/Rectangle 17.png" alt="" className="mb-6 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Welcome to Culture Ai</h2>
          <p className="text-center text-gray-700">
            Ask anything about Kenyan tribes. Instantly understand and explore their rich culture.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 flex flex-col justify-center">
          {/* State manager for active tab */}
          {(() => {
            const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
            return (
              <div className="flex justify-start mb-6">
            <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              window.location.href = '/';
            }}
            className={`text-2xl font-semibold mr-4 pb-1 border-b-2 ${
              activeTab === 'login'
              ? 'text-gray-800 border-orange-500'
              : 'text-gray-500 border-transparent hover:text-orange-500 hover:border-orange-500 transition'
            }`}
            >
            Login
            </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('signup');
              window.location.href = '/signup';
            }}
            className={`text-2xl font-semibold ml-4 pb-1 border-b-2 ${
              activeTab === 'signup'
                ? 'text-gray-800 border-orange-500'
                : 'text-gray-500 border-transparent hover:text-orange-500 hover:border-orange-500 transition'
            }`}
          >
            Signup
          </button>
              </div>
            );
          })()}

        <h2 className="text-3xl font-bold text-gray-800 ">Login to Culture Ai</h2>
        <p className="text-gray-600 mb-3">Ask any question about any tribe in Kenya</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <label >Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <label >Password</label>
            <input
              type="password"
              placeholder="Enter yourPassword"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-center">
              <input
              type="submit"
              className="w-auto bg-orange-500 text-white py-2 px-8 rounded-md hover:bg-orange-400 transition duration-200"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
