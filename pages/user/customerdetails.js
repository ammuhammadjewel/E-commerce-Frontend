// pages/customer-details.js
import CustomerDetails from '../components/CustomerDetails';
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/header";
import Footer from "../components/footer";

const CustomerDetailsPage = () => {
  return (
    <>
    <Header/>
    <div>
      <CustomerDetails />
    </div>
    <Footer/>
    </>
  );
};

export default CustomerDetailsPage;
