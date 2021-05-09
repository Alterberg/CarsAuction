import * as types from "../actions/actionTypes"
import initialState from './initialState';

export default function sellerReducer(state = initialState.sellers, action) {
    switch (action.type) {
        case types.LOAD_SELLERS_SUCCESS:
            return action.sellers;
        default:
            return state;
    }
}