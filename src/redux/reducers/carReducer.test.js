import carReducer from "./carReducer";
import * as actions from "../actions/carActions";

it("should create new car when CREATE_CAR_SUCCESS passed", () => {
    // assume
    const initialState = [
        {
            model: "A"
        },
        {
            model: "B"
        }
    ]

    const newCar = {
        model: "C",
    }

    const action = actions.createCarSuccess(newCar);

    // action
    const newState = carReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].model).toEqual("A");
    expect(newState[1].model).toEqual("B");
    expect(newState[2].model).toEqual("C");
});

it("should update car when UPDATE_CAR_SUCCESS action passed", () => {
    // assume
    const initialState = [
        { id: 1, model: "A" },
        { id: 2, model: "B" },
        { id: 3, model: "C" },
    ]

    const car = { id: 2, model: "New Model" };

    const action = actions.updateCarSuccess(car);

    // action
    const newState = carReducer(initialState, action);
    const updatedCar = newState.find(a => a.id == car.id);

    // assert
    expect(newState.length).toEqual(3);
    expect(updatedCar.model).toEqual("New Model");
})