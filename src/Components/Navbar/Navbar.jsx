import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/Download1.png'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    Navigate('/');
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} width={150} height={100} alt='PicturaNex Logo' />
        <p>PicturaNex</p>
      </div>
      <ul className='nav-menu'>
        <Link to='/'><li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li></Link>
        <Link to='/About'><li className={menu === "About" ? "active" : ""} onClick={() => setMenu("About")}>About Us</li></Link>
        <Link to='/Contact'><li className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact Us</li></Link>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/Cart'>
          <img src={cart_icon} alt='Cart Icon' />
          <div className='nav-cart-count'></div> {/* Example cart count */}
        </Link>
        {localStorage.getItem('auth-token')
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to='/LoginSignup'><button>Login</button></Link>}
      </div>
    </div>
  )
}

export default Navbar;
