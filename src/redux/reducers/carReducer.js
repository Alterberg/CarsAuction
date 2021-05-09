import * as types from "../actions/actionTypes"
import initialState from './initialState';

export default function carReducer(state = initialState.cars, action) {
    switch (action.type) {
        case types.CREATE_CAR:
            return [...state, { ...action.car }];
        case types.LOAD_CARS_SUCCESS:
            return action.cars;
        default:
            return state;
    }
}