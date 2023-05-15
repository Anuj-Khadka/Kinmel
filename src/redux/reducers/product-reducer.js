import {actionTypes} from "../consts/action-types"

const initialState = {
  products: [
    {
      id: 1,
      title: "TV",
      category: "Electronics",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

