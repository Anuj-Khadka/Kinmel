import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/actions/product-actions";
import "../assets/css/Products.css";
import { categoryListContext } from "./ProductListing";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
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
  };

  console.log(categories);

  return (
    <div className="categories-container">
      <h2 className="categories-heading">Category</h2>
      <ul className="categories">
        <li className="category" key="all" onClick={() => clickAllHandler()}>
          ALL
        </li>
        {categories &&
          categories.map((category) => {
            const clickHandler = () => {
              filterProducts(category);
            };
            return (
              <li
                className="category"
                key={category}
                onClick={() => clickHandler()}
              >
                {category.toUpperCase()}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
