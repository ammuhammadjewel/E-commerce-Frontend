// pages/seller-information.js
import SellerInformation from '../components/SellerInformation';
import Header from '../components/header';
import Footer from '../components/footer';

const SellerInformationPage = () => {
  return (
    <>
      <Header />
      <div>
        <SellerInformation />
      </div>
      <Footer />
    </>
  );
};

export default SellerInformationPage;
