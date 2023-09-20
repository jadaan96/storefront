const initialState = {
    category : [],
   totalVotes: 0,
   theProducts:[]
  }

  export default (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      
            case 'FIRST':
                return { ...state, category: payload };
                 
            case 'OFFICE':
            const filteredProducts = state.category.filter(product => product.category === payload);
            return { ...state, theProducts: filteredProducts };
      default:
        return state;
    }
  }
  export const increment = (payload) => {
    return {
      type: 'FIRST',
      payload: payload,

    };
  };
  
  export const office = (name) => {
    return {
      type: 'OFFICE',
      payload: name,
    };
  };
  