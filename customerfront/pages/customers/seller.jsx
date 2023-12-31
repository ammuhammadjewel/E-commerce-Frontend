// components/Sellers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const Sellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/allSellers');
        setSellers(response.data);
      } catch (error) {
        console.error('Error fetching sellers:', error.message);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>All Sellers</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.id}</td>
              <td>{seller.name}</td>
              <td>{seller.email}</td>
              <td>{seller.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellers;
