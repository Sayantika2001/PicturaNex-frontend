import React from 'react'
import "./About.css"
import logo from '../Components/Assets/logo.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
      <img src={logo} alt="" className='about-img' />
    </div>
    <div className="about-right">
      <h1>ABOUT OUR WEBSITE</h1>
      <br/>
      <p>The PicturaNex website represents a sophisticated and scalable digital platform for the exploration, licensing, and acquisition of high-quality stock photography.
      The website features a user-friendly interface designed to facilitate easy navigation and efficient search functionality.
      Users can explore an expensive library of millions of images across various categories, including nature, travel and more.
      </p>
      <h4>Vision:</h4>
      <p>PicturaNex vision typically revolves around empowering creativity and enabling connections through their platform.
        They aim to provide innovative solutions for professionals, businesses, and individuals to bring their creative projects to life.</p>
        <h4>Mission:</h4>
        <p>Their mission often involves providing access to an extensive library of high-quality assets, including images, videos, music, and more, while also offering intuitive tools and services to streamline creative workflows.</p>
        </div>
   </div>
  )
}
export default About;