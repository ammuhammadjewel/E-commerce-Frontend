// components/CustomerProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerProducts = ({ customerId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCustomerProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/admin/customerId/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching customer products:', error);
      }
    };

    fetchCustomerProducts();
  }, [customerId]);

  return (
    <div>
      <h1>Products of Customer</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            Name: {product.name}, Description: {product.description}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerProducts;
