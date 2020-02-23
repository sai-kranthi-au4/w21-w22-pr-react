import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  FETCH_CART,
  FETCH_ITEMS
} from "../actions/types";
export const fetchItems = () => {
  return dispatch => {
    let action = {
      type: FETCH_ITEMS,
      data: [
        {
          id: 1,
          name: "IncultGeo Polo T-Shirt",
          pic: "https://i.imgur.com/VLQztGw.jpg",
          price: 450
        },
        {
          id: 2,
          name: "Cotton shirt",
          pic: "https://i.imgur.com/VLQztGw.jpg",
          price: 350
        },
        {
          id: 3,
          name: "UCB Shirt",
          pic: "https://i.imgur.com/VLQztGw.jpg",
          price: 650
        },
        {
          id: 4,
          name: "Denim Shirt",
          pic: "https://i.imgur.com/VLQztGw.jpg",
          price: 250
        }
      ]
    };
    dispatch(action);
  };
};
export const fetchCart = () => {
  return dispatch => {
    let action = {
      type: FETCH_CART,
      data: [
        {
          id: 4,
          name: "Denim Shirt",
          pic: "https://i.imgur.com/VLQztGw.jpg",
          quantity: 1,
          price: 250
        }
      ]
    };
    dispatch(action);
  };
};

export const addCart = item => dispatch => {
  dispatch({ type: ADD_TO_CART, data: item });
};

export const deleteCart = id => dispatch => {
  dispatch({ type: DELETE_FROM_CART, data: id });
};
export const checkout = () => dispatch => {
  dispatch({ type: 'CHECKOUT', data: [] });
};
