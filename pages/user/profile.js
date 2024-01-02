// pages/user-management.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';

const UserProfile = ({ name }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/admin/seeuserprofile/`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [name]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>NID: {user.nid}</p>
      <p>Address: {user.address}</p>
      {/* Add other user details as needed */}
    </div>
  );
};

const UnapprovedUsers = () => {
  const [unapprovedUsers, setUnapprovedUsers] = useState([]);

  useEffect(() => {
    const fetchUnapprovedUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/unapproved');
        setUnapprovedUsers(response.data);
      } catch (error) {
        console.error('Error fetching unapproved users:', error);
      }
    };

    fetchUnapprovedUsers();
  }, []);

  return (
    <div>
      <h1>Unapproved Users</h1>
      <ul>
        {unapprovedUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

const UserManagement = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header />
      <div>
        {name ? <UserProfile name={name} /> : <UnapprovedUsers />}
      </div>
      <Footer />
    </>
  );
};

export default UserManagement;
