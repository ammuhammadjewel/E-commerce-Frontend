// pages/customers/customerDetails.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const CustomerDetails = () => {
    const router = useRouter();
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        // Fetch customer details using a protected route
        const response = await axios.get(`${process.env.NEXT_PUBLIC_Local_Host}/customerdetails`, { withCredentials: true });

        // Set customer details in the state
        setCustomerDetails(response.data);
      } catch (error) {
        // Handle errors, such as unauthorized access or other request failures
        console.error('Error fetching customer details:', error.message);
        router.push('/customers/login');
      }
    };

    fetchCustomerDetails();
  }, [router]);

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>Customer Details</h1>
      {customerDetails && (
        <div>
        <table className='table'>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{customerDetails.name}</td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>{customerDetails.username}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{customerDetails.address}</td>
            </tr>
            {/* You can add more details as needed */}
          </tbody>
        </table>
      </div>
      
      )}
    </div>
  );
};

export default CustomerDetails;
