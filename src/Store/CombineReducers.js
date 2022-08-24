import { combineReducers } from "redux";
import { CartReducer } from "./Reducers/CartReducer";

// to combine all reducers we have 
export const RootReducer = combineReducers({CartReducer})