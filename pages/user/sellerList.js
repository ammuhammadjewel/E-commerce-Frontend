import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";

const Sellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/allSellers');
        setSellers(response.data);
      } catch (error) {
        console.error('Error fetching sellers:', error.message);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div>
      <>
        <Header />
        <h1>All Sellers</h1>
        <table>
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
        <Footer />
      </>
    </div>
  );
};

export default Sellers;
