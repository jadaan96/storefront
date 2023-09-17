const initialState = {
    cart : [],
  
  }

  export default (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      
            case 'CART':
                return { ...state, cart: [...state.cart, payload] };
           case "CART_REMOVE":
            const removed = state.cart.filter(item => item.name !== payload);
            return { ...state, cart: removed };


      default:
        return state;
    }
  }
 
 
