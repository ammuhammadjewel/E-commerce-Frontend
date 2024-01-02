// pages/update-profile/[name].js
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { register, handleSubmit } = useForm();

  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    
    if (!userData) {
      router.push('user/userlogin'); 
      return;
    }
}, []);

  const onSubmit = async (data) => {
    setLoading(true);

    // Basic validation for non-empty fields
    const newMessages = {};
    if (!data.name) newMessages.name = 'Name is required.';
    if (!data.password) newMessages.password = 'Password is required.';
    if (!data.email) newMessages.email = 'Email is required.';
    if (!data.nid) newMessages.nid = 'NID is required.';
    if (!data.address) newMessages.address = 'Address is required.';
    if (!data.status) newMessages.status = 'Status is required.';

    if (Object.keys(newMessages).length > 0) {
      setMessages(newMessages);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3001/admin/updateprofile/${name}`, data);
      setMessages({});
      alert(response.data.message);
      router.push('/user/profile');
      if (response.data.includes('successfully')) {
        router.push('/user/profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name:</label>
            <input type="text" {...register('name')} />
            {messages.name && <p style={{ color: 'red' }}>{messages.name}</p>}
          </div>
          <br></br>
          <div>
            <label>Password:</label>
            <input type="password" {...register('password')} />
            {messages.password && <p style={{ color: 'red' }}>{messages.password}</p>}
          </div>
          <br></br>
          <div>
            <label>Email:</label>
            <input type="text" {...register('email')} />
            {messages.email && <p style={{ color: 'red' }}>{messages.email}</p>}
          </div>
          <br></br>
          <div>
            <label>NID:</label>
            <input type="text" {...register('nid')} />
            {messages.nid && <p style={{ color: 'red' }}>{messages.nid}</p>}
          </div>
          <br></br>
          <div>
            <label>Address:</label>
            <input type="text" {...register('address')} />
            {messages.address && <p style={{ color: 'red' }}>{messages.address}</p>}
          </div>
          <br></br>
          <div>
            <label>Status:</label>
            <input type="text" {...register('status')} />
            {messages.status && <p style={{ color: 'red' }}>{messages.status}</p>}
          </div>
          <br></br>
          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateProfilePage;
