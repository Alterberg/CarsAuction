import React from "react";
import CarForm from "./CarForm";
import renderer from "react-test-renderer";
import { cars, sellers } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
    const tree = renderer.create(
        <CarForm
            car={cars[0]}
            sellers={sellers}
            onSave={jest.fn()}
            onChange={jest.fn()}
            saving
        />
    );

    expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
    const tree = renderer.create(
        <CarForm
            car={cars[0]}
            sellers={sellers}
            onSave={jest.fn()}
            onChange={jest.fn()}
        />
    );

    expect(tree).toMatchSnapshot();
});