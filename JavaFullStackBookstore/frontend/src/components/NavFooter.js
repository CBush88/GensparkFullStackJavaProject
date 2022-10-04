import { Link } from "react-router-dom";

const NavFooter = () => {
  return (

    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link disabled" to="#">Copyright ©2022</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default NavFooter;