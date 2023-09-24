import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
};

const cardSlicer =createSlice({
  name:"cart",
  initialState,
  reducers:{
    CART:(state,action)=>{
      const existingItem = state.cart.find((item) => item.name === action.payload.name);
      if (!existingItem) {
        console.log(!existingItem);

        axios
          .put(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
            inStock: action.payload.inStock - 1,
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error updating product stock:', error);
          });

        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        return { ...state, cart: [...state.cart] };
      }
    },
    CART_REMOVE:(state,action)=>{
      console.log(action.payload,"123456");
      axios
      .put(`https://api-js401.herokuapp.com/api/v1/products/${action.payload._id}`, {
        inStock: action.payload.inStock,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error resetting product stock:', error);
      });

    const removed = state.cart.filter((item) => item.name !== action.payload.name);

    return { ...state, cart: removed };

    }
  }
})
 export const {CART_REMOVE,CART}=cardSlicer.actions

  export default cardSlicer.reducer;  
