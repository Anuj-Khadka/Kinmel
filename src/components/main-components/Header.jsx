import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../assets/css/Header.css";
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdOutlineShoppingBag,
} from "react-icons/md";

const Header = () => {
  useEffect(() => {
    const inputCheckbox = document.getElementById("input-checkbox");
    const navWrapper = document.getElementById("nav-wrapper");
    const hamMenu = document.querySelectorAll(".ham-menu");

    const handleMenuClick = () => {
      navWrapper.style.right = "-1000px";
    };

    const handleCheckboxClick = () => {
      if (inputCheckbox.checked) {
        navWrapper.style.right = "0px";
        navWrapper.style.top = "100px";
      } else {
        navWrapper.style.right = "-1000px";
      }
    };

    hamMenu.forEach((hamMenu) => {
      hamMenu.addEventListener("click", handleMenuClick);
    });
    inputCheckbox.addEventListener("change", handleCheckboxClick);

    return () => {
      inputCheckbox.removeEventListener("change", () => handleCheckboxClick);

      hamMenu.forEach((hamMenu) => {
        hamMenu.removeEventListener("click", () => handleMenuClick);
      });
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-item brand-box">
        <h1 id="brand-name">Kinmel</h1>
      </div>
      <div className="nav-toggle">
        <input type="checkbox" className="input-checkbox" id="input-checkbox" />
        <label htmlFor="input-checkbox" className="nav-button">
          <span></span>
        </label>
      </div>
      <div className="nav-wrapper" id="nav-wrapper">
        <ul className="nav-links">
          <li className="nav-item ham-menu">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item ham-menu">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item ham-menu">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="nav-item ham-menu">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="nav-item ham-menu">
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
            <button id="search-btn" className="ham-menu">
              <MdOutlineSearch size="1.3rem" color="#ffffde" />
            </button>
          </form>
          <div className="menu-btns">
            <div className="cart-link nav-link ham-menu extra-item">
              <NavLink to="/cart">
                <MdOutlineShoppingBag size="1.3rem" />
              </NavLink>
            </div>
            <div className="user-profile nav-link ham-menu extra-item">
              {/* <Link to={`/profile/${username}`}> */}
              <MdOutlineAccountCircle size="1.3rem" />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
