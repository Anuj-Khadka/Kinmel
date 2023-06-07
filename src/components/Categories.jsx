import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/actions/product-actions";
import "../assets/css/Products.css";
import { categoryListContext } from "./ProductListing";
import {NavLink} from "react-router-dom"

const Categories = ({cat}) => {
  const categories = useSelector((state) => state.categories.categories);
  const [catAll, setCatAll] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());

    return () => {
      return null;
    };
  }, []);

  const { filterProducts } = useContext(categoryListContext);

  const clickAllHandler = () => {
    filterProducts("all");
    setCatAll("all")
  };

  console.log(categories);

  return (
    <div className="categories-container">
      <h2 className="categories-heading">Category</h2>
      <div className="categories">
        <button className={catAll === "all" ? "active category" : "category"} key="all" onClick={() => clickAllHandler()}>
          ALL
        </button>
        {categories &&
          categories.map((category) => {
            const clickHandler = () => {
              filterProducts(category);
            };
            return (
              <button
                // className="category"
                className = {category === cat ? "active category" : "category"}
                key={category}
                onClick={() => clickHandler()}
              >
                {category.toUpperCase()}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
