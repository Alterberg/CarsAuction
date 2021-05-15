import * as types from "./actionTypes"
import * as carApi from "../../api/carApi"
import { beginApiCall, errorApiCall} from "./apiStatusActions";

export function loadCarsSuccess(cars) {
    return { type: types.LOAD_CARS_SUCCESS, cars };
}

export function updateCarSuccess(car) {
    return { type: types.UPDATE_CAR_SUCCESS, car };
}

export function createCarSuccess(car) {
    return { type: types.CREATE_CAR_SUCCESS, car };
}

export function deleteCarOptimistic(car) {
    return { type: types.DELETE_CAR_OPTIMISTIC, car };
}

export function loadCars() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return carApi.getCars()
            .then(cars => {
                dispatch(loadCarsSuccess(cars));
            })
            .catch(error => {
                dispatch(errorApiCall(error));
                throw error;
            })
    }
}

export function saveCar(car) {
    return function (dispatch) {
        dispatch(beginApiCall())
        return carApi
            .saveCar(car)
            .then(savedCar => {
                car.id
                    ? dispatch(updateCarSuccess(savedCar))
                    : dispatch(createCarSuccess(savedCar));
            })
            .catch(error => {
                dispatch(errorApiCall(error));
                throw error;
            });
    };
}

export function deleteCar(car) {
    return function (dispatch) {
        dispatch(deleteCarOptimistic(car));
        return carApi.deleteCar(car.id);
    }
}