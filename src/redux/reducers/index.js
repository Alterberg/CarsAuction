import { combineReducers } from "redux";
import cars from "./carReducer";
import sellers from "./sellerReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    cars,
    sellers,
    apiCallsInProgress
});

export default rootReducer;