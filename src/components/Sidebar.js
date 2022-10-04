import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
        <ul>
          <Link to='/home'>
          <li>
            <a href="#home">HOME</a>
          </li>
          </Link>
          <Link to="/about">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          </Link>
          <Link to="/work">
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          </Link>
          <Link to="/clients"> 
          <li>
            <a href="#clients">CONTACT</a>
          </li>
          </Link>
          <Link to="/usestate">
            <li>
              <a href="#usestates">UseState</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar