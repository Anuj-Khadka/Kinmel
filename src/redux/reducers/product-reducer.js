const initialState = {
  products: [
    {
      id: 1,
      title: "TV",
      category: "Electronics",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
