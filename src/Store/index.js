import product from "./productReducer.store";
import cart from "./cartReducer.store";
import { configureStore } from "@reduxjs/toolkit";

export  const store = configureStore({
  reducer:{product,cart},
})

