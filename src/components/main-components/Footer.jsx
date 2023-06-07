import React, { useEffect } from "react";
import "../../assets/css/Footer.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/actions/product-actions";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  //   const footerCats = categories.map((category) => {
  //     return (
  //       <li className="footer-category-item" key={category}>
  //         {category.toUpperCase()}
  //       </li>
  //     );
  //   });
  return (
    <footer className="footer-container">
      <div className="footer-desc">
        <h1 id="brand-name">Kinmel</h1>
        <p>An ecommerce project built with React and integrated with Redux.</p>
      </div>
      <div className="footer-links">
        <div className="footer-category">
          <h3>Category</h3>
          <ul>
            {/* {...footerCats} */}
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Accessories</li>
            <li>Jewelery</li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="http://linkedin.com/in/anuj-khadka" target="_blank">
              <FaLinkedin size="1.5rem"/>
            </a>
            <a href="http://github.com/anuj-khadka">
              <FaGithub size="1.5rem"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
