import * as types from "./actionTypes"
import * as carApi from "../../api/carApi"

export function loadCarsSuccess(cars) {
    return { type: types.LOAD_CARS_SUCCESS, cars };
}

export function updateCarSuccess(car) {
    return { type: types.UPDATE_CAR_SUCCESS, car };
}

export function createCarSuccess(car) {
    return { type: types.CREATE_CAR_SUCCESS, car };
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

export function saveCar(car) {
    return function (dispatch) {
        return carApi
            .saveCar(car)
            .then(savedCar => {
                car.id
                    ? dispatch(updateCarSuccess(savedCar))
                    : dispatch(createCarSuccess(savedCar));
            })
            .catch(error => {
                throw error;
            });
    };
}