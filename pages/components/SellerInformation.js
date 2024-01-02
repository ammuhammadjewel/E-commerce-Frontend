// components/SellerInformation.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerInformation = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/allSellers');
        setSellers(response.data);
      } catch (error) {
        console.error('Error fetching seller information:', error);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div>
      <h1>All Sellers</h1>
      <ul>
        {sellers.map(seller => (
          <li key={seller.id}>
            Name: {seller.name}, Email: {seller.email}, Contact: {seller.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerInformation;
