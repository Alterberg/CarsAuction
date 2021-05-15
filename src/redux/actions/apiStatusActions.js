import * as types from "./actionTypes"

export function beginApiCall() {
    return { type: types.API_CALL_BEGIN };
}

export function errorApiCall(error) {
    return { type: types.API_CALL_ERROR, error };
}