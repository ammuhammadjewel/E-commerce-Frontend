import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  //const router = useRouter(); 

  const fetchWishlist = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/allWishlistDetails', {
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
      const response = await axios.delete(`http://localhost:3001/deleteFromWishlist/${id}`, {
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
    <>
        <Header />
        <Sidebar/>
    <div>
      
        <h1>Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <table>
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
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      
    </div>
    
      <Footer />
      </>
  );
};

export default Wishlist;
