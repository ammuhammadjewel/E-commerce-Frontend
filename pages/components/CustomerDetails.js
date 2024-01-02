// components/CustomerDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const CustomerDetails = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/customerdetails');
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetails();
  }, []);

  const handleDownloadPDF = () => {
    if (customer) {
      const pdf = new jsPDF();
      pdf.text(`Name: ${customer.name}`, 20, 20);
      pdf.text(`Username: ${customer.username}`, 20, 30);
      pdf.text(`Address: ${customer.address}`, 20, 40);
      pdf.save('customer_details.pdf');
    }
  };

  if (!customer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Customer Details</h1>
      <p>Name: {customer.name}</p>
      <p>Username: {customer.username}</p>
      <p>Address: {customer.address}</p>
      <br></br>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
};

export default CustomerDetails;
