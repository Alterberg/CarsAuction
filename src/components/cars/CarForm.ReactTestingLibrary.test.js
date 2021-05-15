import React from "react";
import CarForm from "./CarForm";
import { cleanup, render } from "react-testing-library";

afterEach(cleanup);

function renderCarForm(args) {
    let defaultProps = {
        sellers: [],
        car: {},
        saving: false,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    const props = { ...defaultProps, ...args };
    return render(<CarForm {...props} />);
}

it("should render Add Car header", () => {
    const { getByText } = renderCarForm();
    getByText("Add Car");
});

it("should render 'Save' button when not saving", () => {
    const { getByText } = renderCarForm();
    getByText("Save");
})

it("should render 'Saving...' button when saving", () => {
    const { getByText } = renderCarForm({ saving: true });
    getByText("Saving...");
})