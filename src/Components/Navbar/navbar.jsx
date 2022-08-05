import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const Change_bg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", Change_bg);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <NavLink to="/" className="navbar-brand">
          <span>E</span>asy Gym
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
