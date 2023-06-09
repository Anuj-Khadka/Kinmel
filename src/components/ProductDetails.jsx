import React, { useEffect, useContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  fetchProduct,
} from "../redux/actions/product-actions";
import { MdStar, MdStarOutline } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";

// useReducer (simple state & action)
const initialState = 1;
const cartReducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const randomStock = Math.floor(Math.random() * 100)

const ProductDetails = () => {
  const [itemNums, dispatchCart] = useReducer(cartReducer, initialState);
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, description, image, rating, price, category } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    // if (productId && productId !== "") fetchProduct();
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const filledStars = [];
  const outlineStars = [];
  // const rates = Math.ceil(rating.rate)
  const ratingRate = rating?.rate || 0; // Perform null check on rating.rate
  for (let i = 0; i < ratingRate; i++) {
    filledStars.push(<MdStar key={i} color="#f46a5b" />);
  }
  for (let i = 0; i < 4 - ratingRate; i++) {
    outlineStars.push(<MdStarOutline key={i} color="#f46a5b" />);
  }

  // console.log(product);
  // const fetchProduct = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((error) => console.log("error", error));
  //   // console.log("response", response);
  //   dispatch(selectedProduct(response.data));
  // };
  return (
    <div className="four wide column product-detail">
      {Object.keys(product).length === 0 ? (
        <div>Loading.....</div>
      ) : (
        <div className="ui link single-product-cards">
          <div className="single-product-card">
            <div className="single-product-image aside-detail">
              <div className="single-image">
                <img src={image} alt={title} />
              </div>
              <div className="desc-image">
                <div className="mult-images">
                  <img src={image} alt={title} />
                </div>
                <div className="mult-images">
                  <img src={image} alt={title} />
                </div>
                <div className="mult-images">
                  <img src={image} alt={title} />
                </div>
                <div className="mult-images">
                  <img src={image} alt={title} />
                </div>
              </div>
            </div>
            <div className="content aside-detail">
              <div className="content-desc">
                <h2 className="header">{title}</h2>
                <div className="meta meta-desc tertiary">{description}</div>
                <div className="meta product-rating">
                  {filledStars}
                  {outlineStars}{" "}
                  <span className="rate-count">({rating.count})</span>{" "}
                </div>
              </div>
              <div className=" meta content-pricing">
                <h3 className="meta price-tag">${price}</h3>
                <span className="price-tip tertiary">
                  Available at a lower price from other sellers that may not
                  offer free Prime shipping.{" "}
                </span>
              </div>
              <div className="meta add-to-cart">
                <div className="item-count">
                  <div className="counter">
                    <button
                      className="cart-click-btn decrease-cart-btn"
                      onClick={() => {
                        dispatchCart("decrement");
                      }}
                    >
                      <AiOutlineMinus size="1rem" />
                    </button>
                    <span className="cart-item-num">{itemNums}</span>
                    <button
                      className="cart-click-btn increase-cart-btn"
                      onClick={() => {
                        dispatchCart("increment");
                      }}
                    >
                      <AiOutlinePlus size="1rem" />
                    </button>
                  </div>
                  <div className="stock-items">
                    Only{" "}
                    <span className="stock-count">
                      {randomStock} items
                    </span>{" "}
                    stocks remaining.
                    <br />
                    Don't miss it!
                  </div>
                </div>
                <div className="meta cart-action-btns">
                  <button className="cart-action-btn" id="buy-now">
                    Buy Now
                  </button>
                  <button className="cart-action-btn" id="add-to-cart">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="meta extra-info">
                <div className="extra-sections free-delivery">
                  <CiDeliveryTruck size="1.5rem" color="#f46a5b" />
                  <div className="extra-sections-info free-deivery-info">
                    <p className="extra-info-header">Free Delivery</p>
                    <a className="extra-info-desc tertiary" href="#">
                      Enter your postal code for delivery availability.
                    </a>
                  </div>
                </div>
                <div className="extra-sections cashback">
                  <BsClipboardCheck size="1.2rem" color="#f46a5b" />
                  <div className="extra-sections-info cashback-info">
                    <p className="extra-info-header">Return Delivery</p>
                    <a className="extra-info-desc tertiary" href="#">
                      Free 30days delivery return.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
