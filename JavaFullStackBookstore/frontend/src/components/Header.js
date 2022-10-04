import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <h3>Welcome to Bookstore!</h3>
        <nav className='navbar'>
          <ul className='nav'>
            <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/">Book List</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header