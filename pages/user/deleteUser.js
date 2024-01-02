// pages/delete.js
import { useRouter } from 'next/router';
import axios from 'axios';

const DeleteCustomer = () => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/deleteAccount', {
        withCredentials: true,
      });

      console.log('Delete successful:', response.data);


      router.push('/customers/login');
    } catch (error) {

      console.error('Error during delete:', error.message);
    }
  };

  return (
    <div>

      <h1>Delete Customer Account</h1>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteCustomer;
