import { combineReducers } from "redux";
import cars from "./carReducer";
import sellers from "./sellerReducer";

const rootReducer = combineReducers({
    cars,
    sellers
});

export default rootReducer;