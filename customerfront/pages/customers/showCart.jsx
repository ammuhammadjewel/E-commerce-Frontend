// components/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import LoggedInNav from '@/components/LoggedInNav';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:3000/showCart', {
        withCredentials: true,
      });

      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteCart/${id}`, {
        withCredentials: true,
      });

      console.log('Cart item deleted:', response.data);
      // You can update the UI or show a success message
      // Fetch the updated cart after deletion
      fetchCart();
    } catch (error) {
      console.error('Error deleting cart item:', error.message);
    }
  };

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                <Link className='btn btn-primary' href={`/customers/edit-cart/${item.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-error" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
