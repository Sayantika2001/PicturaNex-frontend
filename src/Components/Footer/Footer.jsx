import React from 'react'
import './Footer.css';
import Facebook from '../Assets/Facebook.png'
import WhatsApp from '../Assets/WhatsApp.png'
import Instagram from '../Assets/Instagram.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <p> PicturaNex </p>
        </div>
        <ul className = "footer-links">
            <Link to = '/'><li>Home</li></Link>
            <Link to = '/LoginSignup'><li>Images</li></Link>
            <Link to = '/About'><li>About Us</li></Link>
            <Link to = '/Contact'><li>Contact</li></Link>
        </ul>
        <div className = "footer-social-icons">
                <img src={Facebook} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
                <img src={Instagram} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={WhatsApp} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="footer-copyright">
            <hr/>
            <p> Copyright @2024 - Sayantika_Supriti </p>                    
        </div>
    </div>
  )
}

export default Footer