// pages/user-profile/[name].js
import { useRouter } from 'next/router';
import UserProfile from '../components/UserProfile';
import Header from '../components/header';
import Footer from '../components/footer';

const UserProfilePage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Header />
      <div>
        <UserProfile name={name} />
      </div>
      <Footer />
    </>
  );
};

export default UserProfilePage;
