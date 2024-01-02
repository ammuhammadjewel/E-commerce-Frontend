// pages/CustomerDetails.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

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

  return (
    <div>

      <h1>Customer Details</h1>
      <label htmlFor="customerId">Select Customer ID:</label>
      <select
        id="customerId"
        value={selectedCustomerId}
        onChange={(e) => setSelectedCustomerId(e.target.value)}
      >
        <option value="">Select</option>
        {customerIds.map((customerId) => (
          <option key={customerId} value={customerId}>
            {customerId}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>

      {customerDetails && (
        <div>
          <div>
  <h2>Details for Customer ID {selectedCustomerId}:</h2>
  {customerDetails && (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Address</th>
          <th>Action</th> {/* New column for the link */}
          {/* Add additional table headers as needed */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customerDetails.name}</td>
          <td>{customerDetails.username}</td>
          <td>{customerDetails.address}</td>
          <td>
            {console.log('customerId:', customerId) }
          <Link href={`/customers/customer/${selectedCustomerId}`}>Upload Photo</Link>
          </td>
          {/* Add additional table cells as needed */}
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
