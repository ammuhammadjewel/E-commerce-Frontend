// pages/CustomerDetails.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar'; // Adjust the path as needed
import Link from 'next/link';
import UploadPhotoForm from '@/components/UploadPhotoForm'; // Adjust the path as needed

const CustomerDetails = () => {
  const [customerIds, setCustomerIds] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    // Fetch customer IDs from your API
    axios.get('/api/customerIds').then((response) => {
      setCustomerIds(response.data);
    });
  }, []);

  const handleSearch = () => {
    // Fetch customer details for the selected customer ID
    axios.get(`${process.env.NEXT_PUBLIC_Local_Host}/customerdetails/${selectedCustomerId}`).then((response) => {
      setCustomerDetails(response.data);
    });
  };

  const handleUploadSuccess = () => {
    // Fetch updated customer details after a successful upload
    handleSearch();
  };

  return (
    <div>
      <Navbar />
      <h1>Customer Details</h1>
      {/* ... (existing code) */}

      {customerDetails && (
        <div>
          <div>
            <h2>Details for Customer ID {selectedCustomerId}:</h2>
            {customerDetails && (
              <table className='table' border={1}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{customerDetails.name}</td>
                    <td>{customerDetails.username}</td>
                    <td>{customerDetails.address}</td>
                    <td>
                      {/* Link to the "Upload Photo" page */}
                      <Link href="/customers/upload">
                        <a>Upload Photo</a>
                      </Link>

                      {/* Display the UploadPhotoForm component with dynamic customer ID */}
                      <UploadPhotoForm customerId={selectedCustomerId} onUploadSuccess={handleUploadSuccess} />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
