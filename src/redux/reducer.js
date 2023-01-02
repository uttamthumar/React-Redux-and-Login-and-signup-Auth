import { ADD_TO_CART, REMOVE_TO_CART } from "./Constance";


export const cardItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action);
      return [action.data, ...state];

    case REMOVE_TO_CART:
      console.warn("reducerREMOVE_TO_CART", action);
      const foundUser = state.filter((item) => item._id !== action.data);
      // state.length = state.length ? state.length - 1 : [];
      console.warn("foundUser", foundUser);
      return [...foundUser];
    default:
      return state;
  }
};
