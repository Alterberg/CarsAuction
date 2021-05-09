import * as types from "./actionTypes"
import * as carApi from "../../api/carApi"

export function createCar(car) {
    return { type: types.CREATE_CAR, car };
}

export function loadCarsSuccess(cars) {
    return { type: types.LOAD_CARS_SUCCESS, cars}
}

export function loadCars() {
    return function (dispatch) {
        return carApi.getCars().then(cars => {
                dispatch(loadCarsSuccess(cars));
        }).catch(error => {
            throw error;
        })
    }
}