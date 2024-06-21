import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

function Header() {
  const navigate = useNavigate();
  const Gohome = () => navigate("/");
  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={Gohome}>
          <BiLogIn size={35} />
          <span>AUTH:MERN</span>
        </div>

        <ul className="home-links">
          <li className="--flex-center">
            <FaUserCircle size={20} />
            <p className="--color_white">Hi Bryan</p>
          </li>
          <li>
            <NavLink to="/login" className="--btn --btn-primary">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={activeLink}>
              Profile
            </NavLink>
          </li>
          <li>
            <button className="--btn --btn-secondary">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
