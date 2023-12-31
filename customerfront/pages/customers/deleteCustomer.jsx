// pages/delete.js
import { useRouter } from 'next/router';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const DeleteCustomer = () => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/deleteAccount', {
        withCredentials: true,
      });

      // Handle successful delete
      console.log('Delete successful:', response.data);

      // Redirect to the dashboard page or any other page as needed
      router.push('/customers/login');
    } catch (error) {
      // Handle delete failure
      console.error('Error during delete:', error.message);
    }
  };

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>Delete Customer Account</h1>
      <p>Are you sure you want to delete your account?</p>
      <button className="btn btn-error" onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteCustomer;
