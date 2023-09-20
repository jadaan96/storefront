import { combineReducers, createStore,applyMiddleware } from "redux";
import product from "./productReducer";
import cart from "./cartReducer";
import thunk from "redux-thunk";
const reducers = combineReducers({ product,cart })

const store = () => {
  return createStore(reducers, applyMiddleware(thunk))
}

export default store();