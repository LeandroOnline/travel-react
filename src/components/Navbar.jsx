import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const menuicon = "https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg";
const xicon = "https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <NavLink>
        <img
          className="logo"
          src="https://i.pinimg.com/136x136/d6/f8/e8/d6f8e8fdf18062f9232d7e1311da4e2b.jpg"
          alt=""
        />
      </NavLink>
      <h1>Traveling</h1>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <img src={open ? xicon : menuicon} className="icon" />
      </div>

      <div className={open ? "nav-menu active" : "nav-menu"}>
        <div className="nav-item">
          <NavLink to="/" className="nav-links" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/about"
            className="nav-links"
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/contact"
            className="nav-links"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
