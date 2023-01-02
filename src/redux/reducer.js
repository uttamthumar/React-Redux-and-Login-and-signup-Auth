import { ADD_TO_CART, REMOVE_TO_CART } from "./Constance";

const initialState = {
  cardItems: [],
};
export const cardItems = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer1", cardItems);
      const indexExist = state.cardItems.findIndex(
        (product) => product._id === action.data._id
      );

      if (indexExist !== -1) {
        console.log("action.data?.qty", action.data?.qty);
        state.cardItems[indexExist].qty = Number(action.data?.qty) + 1;
        return {
          ...state,
          cardItems: state.cardItems,
          // cardItems: state.cardItems.map((item) => {
          //   const num = item.qty - 0;
          //   return item._id === action.data._id
          //     ? {
          //         ...item,
          //         qty: num + 1,
          //       }
          //     : item;
          // }),
        };
      } else {
        console.log("cardItems", cardItems);
        var data = { ...action.data, qty: 1 };
        return {
          ...state,
          cardItems: [...state.cardItems, data],
        };
      }

    case REMOVE_TO_CART:
      console.warn("reducerREMOVE_TO_CART", action);
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (cartItem) => cartItem._id !== action.data
        ),
      };
    default:
      return state;
  }
};
