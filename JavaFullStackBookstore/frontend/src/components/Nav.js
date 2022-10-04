import { Link } from "react-router-dom";

const Nav = () => {
  return (

    <nav className="navbar navbar-expand-sm">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/inventory">Inventory Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact Us</Link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Sign Out</a>
        </li>
      </ul>
    </nav>

  )
}

export default Nav