import { createStore } from "redux"; 
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as carActions from "./actions/carActions";

it("Should handle creating cars", function () {
    // arrange
    const store = createStore(rootReducer, initialState);
    const car = {
        model: "Tesla"
    };

    // act
    const action = carActions.createCarSuccess(car);
    store.dispatch(action);

    // assert
    const createdCar = store.getState().cars[0];
    expect(createdCar).toEqual(car);
})