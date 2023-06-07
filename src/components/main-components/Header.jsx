import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../assets/css/Header.css";
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-item brand-box">
        <h1 id="brand-name">Kinmel</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="extra-links">
        <form method="post" className="search-form extra-item">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Shoes, mobile, etc."
          />
          <button id="search-btn">
            <MdOutlineSearch size="1.3rem" color="#ffffde" />
          </button>
        </form>
        <div className="cart-link nav-link extra-item">
          <NavLink to="/cart">
            <MdOutlineShoppingBag size="1.3rem" />
          </NavLink>
        </div>
        <div className="user-profile nav-link extra-item">
          {/* <Link to={`/profile/${username}`}> */}
          <MdOutlineAccountCircle size="1.3rem" />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
