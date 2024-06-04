import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import background from '../Components/Assets/pexels-mrwson-4275885.jpeg'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
      <div className="intro-field">
        <h1>Explore the Great Pictures</h1>
        <p>Discover adventure, connect with nature, and experience the wilderness like never before.</p>
        <Link to ='/LoginSignup'>
        <button>Get Started</button></Link>
    </div>
    </div>
  )
}
export default Home