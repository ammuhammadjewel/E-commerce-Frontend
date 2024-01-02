// components/EditCart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const EditCart = ({ id }) => {
    const router = useRouter();
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    // Fetch the current cart item data for editing
    const fetchCartItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/showCart/${id}`, {
          withCredentials: true,
        });

        // Update the state with the fetched data
        setQuantity(response.data.quantity);
        // You can update other state variables based on your cart item structure
      } catch (error) {
        console.error('Error fetching cart item for editing:', error.message);
      }
    };

    fetchCartItem();
  }, [id]);

  const handleUpdate = async () => {
    
    try {
      const response = await axios.put(`http://localhost:3000/updateCart/${id}`, {
        quantity,
      }, {
        withCredentials: true,
      });

      console.log('Cart item updated:', response.data);
      router.push('/customers/showCart');
      // You can update the UI or show a success message
      // Redirect to the cart page or any other page as needed
    } catch (error) {
      console.error('Error updating cart item:', error.message);
    }
  };

  return (
    <div className='container'>
      <h1>Edit Cart Item</h1>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      {/* Add more input fields based on your CartInfo DTO */}
      <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditCart;
