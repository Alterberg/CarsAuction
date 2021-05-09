import * as types from "./actionTypes"
import * as sellerApi from "../../api/sellerApi"

export function loadSellersSuccess(sellers) {
    return { type: types.LOAD_SELLERS_SUCCESS, sellers}
}

export function loadSellers() {
    return function (dispatch) {
        return sellerApi.getSellers().then(sellers => {
                dispatch(loadSellersSuccess(sellers));
        }).catch(error => {
            throw error;
        })
    }
}