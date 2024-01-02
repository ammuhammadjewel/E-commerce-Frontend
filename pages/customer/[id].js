// pages/customer/[id]/products.js
import { useRouter } from 'next/router';
import CustomerProducts from '../components/CustomerProducts';
import Header from '../components/header';
import Footer from '../components/footer';

const CustomerProductsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div>
        {id && <CustomerProducts />}
      </div>
      <Footer />
    </>
  );
};

export default CustomerProductsPage;
