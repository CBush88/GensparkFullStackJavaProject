import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Contact Us</Link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link disabled" to="#">Copyright ©2022</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer