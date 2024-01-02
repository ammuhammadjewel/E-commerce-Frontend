import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CreateAccount = () => {
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    username: '',
    password: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
  };

  const validateForm = () => {
    let isValid = true;

    // Validate non-nullable fields
    for (const key in customerInfo) {
      if (!customerInfo[key]) {
        setErrors((prevErrors) => ({ ...prevErrors, [key]: `${key} is required` }));
        isValid = false;
      }
    }

    // Validate password length
    if (customerInfo.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters',
      }));
      isValid = false;
    }

    // Validate email format (a basic check for the presence of '@')
    if (customerInfo.username.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username cannot contain @ symbol',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_Local_Host}/createaccount`, customerInfo);
        alert('Account created successfully');
        router.push('/customers/login');
      } catch (error) {
        console.error('Error creating account:', error);
        alert('Error creating account. Please check the console for details.');
      }
    }
  };

  return (
    <div className='abc'>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input className="input input-bordered input-accent w-full max-w-xs" type="text" name="name" value={customerInfo.name} onChange={handleChange} />
          <span style={{ color: 'red' }}>{errors.name}</span>
        </label>
        <br />
        <label>
          Username:
          <input className="input input-bordered input-accent w-full max-w-xs" type="text" name="username" value={customerInfo.username} onChange={handleChange} />
          <span style={{ color: 'red' }}>{errors.username}</span>
        </label>
        <br />
        <label>
          Password:
          <input
          className="input input-bordered input-accent w-full max-w-xs"
            type="password"
            name="password"
            value={customerInfo.password}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.password}</span>
        </label>
        <br />
        <label>
          Address:
          <input className="input input-bordered input-accent w-full max-w-xs" type="text" name="address" value={customerInfo.address} onChange={handleChange} />
          <span style={{ color: 'red' }}>{errors.address}</span>
        </label>
        <br />
        <button className='btn btn-outline btn-accent' type="submit">Create Account</button>
      </form>
      <p>Already have an account? <Link className='btn btn-info' href="/customers/login">Login</Link></p>
      
    </div>
  );
};

export default CreateAccount;
