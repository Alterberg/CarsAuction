import * as types from "./actionTypes"
import * as sellerApi from "../../api/sellerApi"
import { beginApiCall, errorApiCall } from "./apiStatusActions"

export function loadSellersSuccess(sellers) {
    return { type: types.LOAD_SELLERS_SUCCESS, sellers}
}

export function loadSellers() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return sellerApi.getSellers()
            .then(sellers => {
                dispatch(loadSellersSuccess(sellers));
            })
            .catch(error => {
                dispatch(errorApiCall(error));
                throw error;
            });
    }
}