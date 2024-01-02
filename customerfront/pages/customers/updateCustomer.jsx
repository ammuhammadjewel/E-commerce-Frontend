import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const UpdateCustomer = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;

    // Validate non-nullable fields
    if (!name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      isValid = false;
    }

    if (!address) {
      setErrors((prevErrors) => ({ ...prevErrors, address: 'Address is required' }));
      isValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      isValid = false;
    }

    // Validate password length
    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleUpdate = async () => {
    if (validateForm()) {
      try {
        const response = await axios.put(
          'http://localhost:3000/update',
          {
            name,
            address,
            password,
          },
          { withCredentials: true }
        );

        // Handle successful update
        console.log('Update successful:', response.data);

        // Redirect to the dashboard page or any other page as needed
        router.push('/customers/dashboard');
      } catch (error) {
        // Handle update failure
        console.error('Error during update:', error.message);
      }
    }
  };

  return (
    <div className='container'>
      <LoggedInNav />
      <h1>Update Customer</h1>
      <div>
        <label>Name:</label>
        <input className="input input-bordered input-accent w-full max-w-xs" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.name}</span>
      </div>
      <div>
        <label>Address:</label>
        <input className="input input-bordered input-accent w-full max-w-xs" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.address}</span>
      </div>
      <div>
        <label>Password:</label>
        <input className="input input-bordered input-accent w-full max-w-xs" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>
      <button className='btn btn-outline btn-accent' onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateCustomer;
