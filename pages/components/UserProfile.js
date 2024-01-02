// components/UserProfile.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ name }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/admin/seeuserprofile/${name}`);
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
      <h1> Profile: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>NID: {user.nid}</p>
      <p>Address: {user.address}</p>
      {/* Add other user details as needed */}
    </div>
  );
};

export default UserProfile;
