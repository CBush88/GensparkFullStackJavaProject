import { Link, useNavigate } from "react-router-dom";

const Nav = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoggedIn(null);
    navigate("/");
  }

  return (

    <nav className="navbar navbar-expand-xl navbar-dark header-nav">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto">
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button type="button" onClick={handleClick} className="btn btn-secondary btn-sm">Sign Out</button>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav