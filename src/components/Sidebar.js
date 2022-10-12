import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
        <ul>
          <Link to='/home'>
          <li>
            <a href="#home"><button>HOME</button></a>
          </li>
          </Link>
          <Link to="/about">
          <li>
            <a href="#about"><button>ABOUT</button></a>
          </li>
          </Link>
          <Link to="/work">
          <li>
            <a href="#work"><button>PORTFOLIO</button></a>
          </li>
          </Link>
          <Link to="/clients"> 
          <li>
            <a href="#clients"><button>CONTACT</button></a>
          </li>
          </Link>
          <Link to="/usestate">
            <li>
              <a href="#usestates"><button>UseState</button></a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar