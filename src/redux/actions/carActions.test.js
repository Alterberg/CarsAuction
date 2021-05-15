import * as carActions from "./carActions";
import * as types from "./actionTypes";
import { cars } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
    afterEach(() => fetchMock.restore());

    describe("Load Cars Thunk", () => {
        it("should create API_CALL_BEGIN and LOAD_CARS_SUCCESS when loading courses", () => {
            fetchMock.mock("*", {
                body: cars,
                headers: { "content-type": "application/json " }
            });

            const expectedActions = [
                { type: types.API_CALL_BEGIN },
                { type: types.LOAD_CARS_SUCCESS, cars }
            ];

            const store = mockStore({ cars: [] });
            return store.dispatch(carActions.loadCars()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
        })
    })
});

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