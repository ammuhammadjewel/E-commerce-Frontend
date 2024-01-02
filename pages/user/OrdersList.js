// components/OrdersList.js

import axios from 'axios';
import Footer from '../components/footer';
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";

import Header from "../components/header";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/showAllOrders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <div style={{ display: 'flex' }}>
        
        <div>
          <h1>Orders List</h1>
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                Name: {order.name}, Price: {order.price}, Quantity: {order.quantity}, Total: {order.total}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersList;