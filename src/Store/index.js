import { combineReducers, createStore } from "redux";
import product from "./productReducer";

const reducers = combineReducers({ product })

const store = () => {
  return createStore(reducers)
}

export default store();