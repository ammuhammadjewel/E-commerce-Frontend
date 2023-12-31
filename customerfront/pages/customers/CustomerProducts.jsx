// pages/CustomerProducts.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const CustomerProducts = () => {
  const [customerIds, setCustomerIds] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch customer IDs from your API
    axios.get('/api/customerIds').then((response) => {
      setCustomerIds(response.data);
    });
  }, []);

  const handleSearch = () => {
    // Fetch products for the selected customer ID
    axios.get(`${process.env.NEXT_PUBLIC_Local_Host}/${selectedCustomerId}/products`).then((response) => {
      setProducts(response.data[0].products);
    });
  };

  return (
    <div className='container' >
        <LoggedInNav/>
      <h1>Customer Products</h1>
      <label htmlFor="customerId">Select Customer ID:</label>
      <select
      className="btn dropp"
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
      <button className='btn btn-outline' onClick={handleSearch}>Search</button>

      {products.length > 0 && (
        <div>
          <h2>Products for Customer ID {selectedCustomerId}:</h2>
            <table className='table' border={1} >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
      )}
    </div>
  );
};

export default CustomerProducts;
