// pages/customers/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LoggedInNav from '@/components/LoggedInNav';

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dashboard data using a protected route
        const response = await axios.get(`${process.env.NEXT_PUBLIC_Local_Host}/dashboard`, { withCredentials: true });

        // Set user data in the state
        setUserData(response.data);
      } catch (error) {
        // If an error occurs, redirect to the login page
        console.error('Error fetching dashboard data:', error.message);
        router.push('/customers/login');
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className='container'>
      <LoggedInNav/>
      <h1 className='abc' >{userData && <p className='badge badge-accent badge-outline' style={{ height: '50px', fontSize: '18px' }} >{userData}</p>}</h1>
    </div>
  );
};

export default Dashboard;
