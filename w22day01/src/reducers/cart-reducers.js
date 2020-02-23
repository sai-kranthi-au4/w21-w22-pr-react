import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  FETCH_CART,
  FETCH_ITEMS
} from "../actions/types";

let initialState = {
  itemsList: [],
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let shop = [...state.cart];
      let index = shop.findIndex(item => item.id === action.data.id);
      if (shop.length !== 0 && index !== -1) {
        if (shop[index].quantity >= 1) shop[index].quantity++;
      } else {
        action.data.quantity = 1;
        shop.push(action.data);
      }

      return { ...state, cart: shop };
    }
    case DELETE_FROM_CART: {
      let cart = [...state.cart];
      let index = cart.findIndex(item => item.id === action.data);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      return { ...state, cart };
    }
    case FETCH_CART: {
      return { ...state, cart: action.data };
    }
    case FETCH_ITEMS: {
      return { ...state, itemsList: action.data };
    }
    case "CHECKOUT": {
      return { ...state, cart: action.data };
    }
    default:
      return state;
  }
};
