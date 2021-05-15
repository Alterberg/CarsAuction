import React from "react";
import { ManageCarsPage } from "./ManageCarsPage";
import { mount } from "enzyme";
import { sellers, newCar, cars } from "../../../tools/mockData";

function render(args) {
    const defaultProps = {
        sellers,
        cars,
        loadCars: jest.fn(),
        loadSellers: jest.fn(),
        saveCar: jest.fn(),
        history: {},
        car: newCar,
        match: {}
    }

    const props = { ...defaultProps, ...args };
    return mount(<ManageCarsPage {...props} />);
}

it("should error with 'Model is required.' when model input is not filled", () => {
    const wrapper = render();
    wrapper.find("form").simulate("submit");

    expect(wrapper.find('.alert').first().text()).toEqual("Model is required.");
})