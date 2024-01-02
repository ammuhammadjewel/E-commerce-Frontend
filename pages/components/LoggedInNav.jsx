// components/LoggedInNav.js

import Link from 'next/link';

const LoggedInNav = () => {
  return (
    <div> 
    <div className="navbar customnav bg-base-100">
  <div className="navbar-start" >
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" href='/customers/dashboard'>My Detail</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href='/customers/customerDetails'>My Detail</Link></li>
      <li> <Link href='/customers/showCart'>Show Cart</Link> </li>
      <li> <Link href='/customers/deleteCustomer'>Delete My Account</Link>  </li>
      <li> <Link href='/customers/updateCustomer'>Update My Account</Link> </li>
      <li> <Link href='/customers/mailer'>Send A Mail</Link> </li>
      <li> <Link href='/customers/Wishlist'>Show Wishlist</Link> </li>      
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More Options&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li> <Link href='/customers/ACustomerDetail'>All Customer Detail</Link> </li> 
          <li> <Link href='/customers/allProducts'>Show All Products</Link> </li> 
          <li> <Link href='/customers/CustomerProducts'>Users' Products</Link> </li> 
          <li> <Link href='/customers/customers-of-all-products'>Customers of Products</Link> </li> 
          <li> <Link href='/customers/seller'>Sellers Details</Link> </li> 
          
        </ul>
      </div>
  </div>
</div>
    
    </div>
  );
};

export default LoggedInNav;
