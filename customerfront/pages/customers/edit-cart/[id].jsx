// pages/edit-cart/[id].js
import { useRouter } from 'next/router';
import EditCart from '../../../components/EditCart';

const EditCartItem = () => {
  const router = useRouter();
  const { id } = router.query; // Get the cart item ID from the URL parameter

  return (
    <div>
      <EditCart id={id} />
    </div>
  );
};

export default EditCartItem;
