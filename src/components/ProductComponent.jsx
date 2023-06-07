import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdStar, MdStarOutline, MdStarRate } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const ProductComponent = ({ cat }) => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(typeof products)

  console.log(cat);

  // console.log("product list ", productsList)

  const renderList = products.map((product) => {
    const { id, title, image, price, category, rating } = product;
    if (category === cat || cat === "all" || !cat) {
      return (
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="four wide column product-item"
          key={id}
        >
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="product-image">
                  <img src={image} alt={title} />
                </div>
                <div className="product-content">
                  <div className="header">
                    <h4 className="product-name">{title}</h4>
                    <span className="product-price">$ {price}</span>
                  </div>
                  <div className="meta">{category}</div>
                  <div className="rating" id="rating">
                    {/* {rateContainer} */}
                    <MdStar />
                    <MdStarOutline />
                    <span className="rating-count">({rating.count})</span>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      );
    }

    // return null
  });

  return <>{renderList}</>;
};

export default ProductComponent;
