import React from 'react'
import './Images.css'
import background from '../Components/Assets/Background.webp'
import Dropdown from 'react-bootstrap/Dropdown';

const Images = () => {

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
      <section class="intro">
        <h1>Get as many images as you need-no more, no less.</h1>
        <p>One library, milions of ways to tell your story</p>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        All Categories
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/Nature">Nature</Dropdown.Item>
        <Dropdown.Item href="/Flower">Flower</Dropdown.Item>
        <Dropdown.Item href="/Animal">Animal</Dropdown.Item>
        <Dropdown.Item href="/Sea">Sea</Dropdown.Item>
        <Dropdown.Item href="/Children">Children</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </section>
    </div>
  )
}
export default Images;