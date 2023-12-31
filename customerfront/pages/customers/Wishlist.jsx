// components/Wishlist.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get('http://localhost:3000/allWishlistDetails', {
        withCredentials: true,
      });

      setWishlistItems(response.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error.message);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteFromWishlist/${id}`, {
        withCredentials: true,
      });

      console.log('Wishlist item deleted:', response.data);
      // You can update the UI or show a success message
      // Fetch the updated wishlist after deletion
      fetchWishlist();
    } catch (error) {
      console.error('Error deleting wishlist item:', error.message);
    }
  };

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
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

export default Wishlist;
