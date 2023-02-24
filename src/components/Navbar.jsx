import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const menuicon = "https://cdn-icons-png.flaticon.com/512/6499/6499731.png";
const xicon = "https://cdn-icons-png.flaticon.com/512/7693/7693271.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <NavLink>
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/2798/2798097.png"
          alt=""
        />
      </NavLink>

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
            to="/services"
            className="nav-links"
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
        </div>

        <div className="nav-item">
          <NavLink
            to="/products"
            className="nav-links"
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
