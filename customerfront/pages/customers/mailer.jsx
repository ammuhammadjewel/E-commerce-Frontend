// components/EmailForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import LoggedInNav from '@/components/LoggedInNav';

const EmailForm = () => {
  const router = useRouter();

  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/sendEmail', emailData);
      console.log('Email sent successfully');

      // Redirect to the dashboard page
      router.push('/customers/dashboard');
    } catch (error) {
      console.error('Error sending email:', error.message);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div className='container'>
      <LoggedInNav/>
      <form onSubmit={handleSubmit}>
      <label>
        To:
        <input className="input input-bordered w-full max-w-xs" type="email" name="to" value={emailData.to} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Subject:
        <input className="input input-bordered input-warning w-full max-w-xs" type="text" name="subject" value={emailData.subject} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Text:
        <textarea lassName="textarea textarea-warning" name="text" value={emailData.text} onChange={handleInputChange} required />
      </label>
      <br />
      <button className="btn btn-warning text-warning mailbtn" type="submit">Send Email</button>
    </form>
    </div>
  );
};

export default EmailForm;
