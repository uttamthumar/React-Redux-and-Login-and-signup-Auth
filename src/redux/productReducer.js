import {  SET_PRODUCT_LIST } from "./Constance";


export const productData = (state = [] , action) => {
  switch (action.type) {
      case SET_PRODUCT_LIST:
        console.warn("setproductlist", action.data.data); 
        return [...action.data.data]
    default:
        
      return state;
  }
}