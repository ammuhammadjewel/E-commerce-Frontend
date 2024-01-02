// components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/allProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/addToCart/${id}`, {
        quantity: 1, // Set a default quantity for simplicity
      }, { withCredentials: true });

      console.log('Item added to cart:', response.data);
      // You can update the UI or show a success message
    } catch (error) {
      console.error('Error adding to cart:', error.message);
    }
  };

  const handleAddToWishlist = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/createWishlist/${id}`, {}, { withCredentials: true });

      console.log('Item added to wishlist:', response.data);
      // You can update the UI or show a success message
    } catch (error) {
      console.error('Error adding to wishlist:', error.message);
    }
  };

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>Product List</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button className='btn btn-secondary' onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                <button className='btn btn-primary' onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
