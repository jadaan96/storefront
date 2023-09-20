import axios from 'axios';

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CART':
      const existingItem = state.cart.find((item) => item.name === payload.name);
      if (!existingItem) {
        console.log(!existingItem);

        axios
          .put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`, {
            inStock: payload.inStock - 1,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error updating product stock:', error);
          });

        return { ...state, cart: [...state.cart, payload] };
      } else {
        return { ...state, cart: [...state.cart] };
      }

    case 'CART_REMOVE':
      axios
        .put(`https://api-js401.herokuapp.com/api/v1/products/${payload._id}`, {
          inStock: payload.inStock,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error resetting product stock:', error);
        });

      const removed = state.cart.filter((item) => item.name !== payload.name);

      return { ...state, cart: removed };

    default:
      return state;
  }
};
