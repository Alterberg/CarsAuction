import * as types from "../actions/actionTypes"

export default function carReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CAR:
            return [...state, { ...action.car }];
        default:
            return state;
    }
}