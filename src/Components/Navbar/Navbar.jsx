import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/Download1.png'

const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} width={150} height={100} alt=''/>
        <p>PicturaNex</p>
    </div>
    <ul className='nav-menu'>
    <Link to = '/'><li onClick={()=>{setMenu("Home")}}>Home</li></Link>
    <Link to = '/About'><li onClick={()=>{setMenu("About")}}>About Us</li></Link>
    <Link to = '/Contact'><li onClick={()=>{setMenu("Contact")}}>Contact Us</li></Link>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/Cart'><img src={cart_icon} alt=''/></Link>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
      : <Link to='/LoginSignup'><button>Login</button></Link>}
        </div>
    </div>
  )
}
export default Navbar