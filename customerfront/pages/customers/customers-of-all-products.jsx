import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_Local_Host}/allProducts/customer`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className='container'>
    <LoggedInNav/>
      <h1>Product List</h1>
      <table className='table' border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Customers</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              
                
                  {product.customer.map((customer) => (
                    <tr>
                      <td key={customer.id}>{customer.name}  ({customer.username}) </td>
                      </tr>
                    // Add additional customer properties as needed
                  ))}
                
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
