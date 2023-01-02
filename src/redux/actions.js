import { ADD_TO_CART } from "./Constance";
import { REMOVE_TO_CART } from "./Constance";

export const addtocart = (data) => {
  console.warn("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeItem = (data) => {
  console.warn("action remove ");
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
