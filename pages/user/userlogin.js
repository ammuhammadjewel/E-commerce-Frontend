// pages/user-login.js
import UserLogin from '../components/UserLogin';
import Header from '../components/header';
import Footer from '../components/footer';

const UserLoginPage = () => {
  return (
    <>
      <Header />
      <div>
        <UserLogin />
      </div>
      <Footer />
    </>
  );
};

export default UserLoginPage;
