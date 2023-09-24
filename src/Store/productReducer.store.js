import { createSlice ,current } from "@reduxjs/toolkit";

const initialState = {
    category : [],
   totalVotes: 0,
   theProducts:[]
  }



    const productSlicer= createSlice({
      name:"product",
      initialState,
      reducers:{
        get: (state,action)=>{
          console.log(current(state), action.payload,"1234567")
          state.category= action.payload
          // action.payload.forEach(e =>{

          //   state.category.push(e)
          //   console.log(e);
          // })
        },
        office:(state,action)=>{
          const filteredProducts = state.category.filter(product => product.category === action.payload);
          return {...state,theProducts: filteredProducts}
        }
      }
    })
   export const {get,office} =productSlicer.actions;

    export default productSlicer.reducer;