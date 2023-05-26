import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {MdStar, MdStarOutline, MdStarRate} from "react-icons/md";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, rating } = product;

    // let rateContainer = document.getElementById("rating")
    // for (let i = 0; i < Math.ceil(rating.rate); i++) {
    //   rateContainer.appendChild(<MdStarRate/>)
    // }

    return (
      <div className="four wide column product-item" key={id}>
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
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
