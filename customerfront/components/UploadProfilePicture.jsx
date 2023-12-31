// components/UploadProfilePicture.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadProfilePicture = ({ customerId, onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('profilepic', file);

      await axios.post(`http://localhost:3000/customerProfilePicture/${customerId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
      });

      console.log('Profile picture uploaded successfully');

      // Notify the parent component about the upload success
      onUploadSuccess();

    } catch (error) {
      console.error('Error uploading profile picture:', error.message);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div className='container'>
      <h2>Upload Profile Picture</h2>
      <label htmlFor="profilePic">Select Profile Picture:</label>
      <input type="file" className=' dropp file-input file-input-bordered file-input-accent w-full max-w-xs' accept=".jpg, .webp, .png, .jpeg" onChange={handleFileChange} />
      <button className="btn btn-outline btn-accent" onClick={handleUpload}>Upload Picture</button>
    </div>
  );
};

export default UploadProfilePicture;
