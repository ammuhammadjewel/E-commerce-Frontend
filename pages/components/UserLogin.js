// components/UserLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UserLogin = () => {
  const [formData, setFormData] = useState({ name: '', password: '' });
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setNameError('');
    setPasswordError('');

    if (!formData.name) {
      setNameError('Please enter your name.');
      return;
    }

    if (!formData.password) {
      setPasswordError('Please enter your password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/admin/userlogin', formData);
      setMessage(response.data);

      // If login is successful, redirect to user profile
      if (response.data.includes('successfully')) {
        router.push('/updateprofile/jwel');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <p style={{ color: 'red' }}>{nameError}</p>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </label>
      <p style={{ color: 'red' }}>{passwordError}</p>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>Don't have an account? <Link href="/user/registration">Sign Up</Link></p>
    </div>
  );
};

export default UserLogin;
