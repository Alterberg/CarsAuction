import * as carActions from "./carActions";
import * as types from "./actionTypes";
import { cars } from "../../../tools/mockData";

describe("createCarSuccess", () => {
    it("should create a CREATE_CAR_SUCCESS action", () => {
        // arrange
        const car = cars[0];
        const expectedAction = {
            type: types.CREATE_CAR_SUCCESS,
            car
        }

        // act
        const action = carActions.createCarSuccess(car);

        // assert
        expect(action).toEqual(expectedAction);
    });
});