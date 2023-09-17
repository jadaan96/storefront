export const CART = (payload) => {
    // console.log(payload,"cart");
    return {
      type: 'CART',
      payload: payload,

    };
  };
  export const CART_REMOVE = (payload) => {
    return {
      type: 'CART_REMOVE',
      payload: payload,

    };
  };

  