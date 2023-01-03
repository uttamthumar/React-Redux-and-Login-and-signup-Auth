import { ADD_TO_CART, REMOVE_TO_CART } from "./Constance";

const initialState = {
  cardItems: [],
};
export const cardItems = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.cardItems.find(
        (product) => product._id === action.data._id
      );
      console.warn("indexExist", item);

      if (item) {
        return {
          ...state,
          // cardItems: state.cardItems,
          cardItems: state.cardItems.map((item) => {
            return item._id === action.data._id
              ? {
                  ...item,
                  qty: Number(item.qty) + 1,
                }
              : item;
          }),
        };
      } else {
        var data = { ...action.data, qty: 1 };
        return {
          ...state,
          cardItems: [...state.cardItems, data],
        };
      }

    case REMOVE_TO_CART:
      console.warn(
        "state.totalPrice",
        action.data._id,
        Number(state.totalPrice),
        Number(action.data.Price)
      );

      // check qty is 1 ? delete : decrement qty
      console.log("action.data", action.data);
      const cartData = state.cardItems.find(
        (cartItem) => cartItem._id === action.data._id
      );

      console.log("item1", cartData);
      if (cartData) {
        if (cartData.qty === 1) {
          const newCartData = state.cardItems.filter(
            (cartItem) => cartItem._id !== action.data._id
          );
          return {
            ...state,
            cardItems: newCartData,
          };
        } else {
          return {
            ...state,
            cardItems: state.cardItems.map((item) => {
              return item._id === action.data._id
                ? {
                    ...item,
                    qty: Number(item.qty) - 1,
                  }
                : item;
            }),
          };
        }
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};
