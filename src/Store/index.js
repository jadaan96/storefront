import { combineReducers, createStore } from "redux";
import product from "./productReducer";
import cart from "./cartReducer";
const reducers = combineReducers({ product,cart })

const store = () => {
  return createStore(reducers)
}

export default store();