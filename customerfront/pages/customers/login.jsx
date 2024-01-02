import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (!username.trim()) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          'http://localhost:3000/login',
          {
            username,
            password,
          },
          { withCredentials: true }
        );

        // Handle successful login
        console.log('Login successful:', response.data);
        

        // Redirect to the dashboard page
        router.push('/customers/dashboard');
      } catch (error) {
        // Handle login failure
        console.error('Error during login:', error.message);
      }
    }
  };

  return (
    <div className='abc'>
      <h1 className="badge badge-lg">Login Page</h1>
      <div>
        <label className="badge">Username:</label>
        <input
          type="text"
          className="input input-bordered input-info w-full max-w-xs"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError('');
          }}
        />
        <span style={{ color: 'red' }}>{usernameError}</span>
      </div>
      <div>
        <label className="badge">Password:</label>
        <input
          className="input input-bordered input-info w-full max-w-xs"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
        />
        <span style={{ color: 'red' }}>{passwordError}</span>
      </div>
      <button className='btn btn-outline btn-info' onClick={handleLogin}>Login</button>
      <br />
      <p>Don't have an account? <Link className='btn btn-accent' href="/customers/CreateAccount">Register</Link></p>
      
    </div>
  );
};

export default Login;
