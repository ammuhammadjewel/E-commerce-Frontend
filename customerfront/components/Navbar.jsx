// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="abc">
      <Link href="/customers/login" className="btn btn-outline btn-info">
        Login
      </Link>
      <Link href="/customers/CreateAccount" className="btn btn-outline btn-accent">
        Create Account
      </Link>

      {/* <button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button> */}
    </nav>
  );
};

export default Navbar;
