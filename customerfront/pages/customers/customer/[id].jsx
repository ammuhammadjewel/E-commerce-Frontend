// pages/customer/[id].js
import { useRouter } from 'next/router';
import UploadProfilePicture from '../../../components/UploadProfilePicture';

const CustomerProfilePage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the customer ID from the URL parameter

  const handleUploadSuccess = () => {
    // Handle any logic after a successful upload
    // For example, you might want to refresh the customer details
    console.log('Upload success! Refresh customer details or perform other actions.');
  };

  return (
    <div>
      <UploadProfilePicture customerId={id} onUploadSuccess={handleUploadSuccess} />
      {/* Add other components or information related to the customer profile */}
    </div>
  );
};

export default CustomerProfilePage;
