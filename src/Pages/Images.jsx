import React from 'react'
import './Images.css'
import background from '../Components/Assets/Background.webp'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Images = () => {

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
      <section className="intro">
        <h1>Get as many images as you need-no more, no less.</h1>
        <p>One library, milions of ways to tell your story</p>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        All Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item><Link to= "/Nature" className="btn btn-outline-secondary">Nature</Link></Dropdown.Item>
        <Dropdown.Item><Link to= "/Flower" className="btn btn-outline-secondary">Flower</Link></Dropdown.Item>
        <Dropdown.Item><Link to= "/Animal" className="btn btn-outline-secondary">Animal</Link></Dropdown.Item>
        <Dropdown.Item><Link to= "/Sea" className="btn btn-outline-secondary"> Sea</Link></Dropdown.Item>
        <Dropdown.Item><Link to= "/Children" className="btn btn-outline-secondary">Children</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </section>
    </div>
  )
}
export default Images;