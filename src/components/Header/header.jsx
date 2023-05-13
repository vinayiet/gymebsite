import React from 'react'
import Logo from '../../assets/logo.png'
import './header.css'
const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="image not found" className='logo' />
        <ul  className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
