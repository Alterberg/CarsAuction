import * as types from "./actionTypes"

export function createCar(car) {
    return { type: types.CREATE_CAR, car };
}