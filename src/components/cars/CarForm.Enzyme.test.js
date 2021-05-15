import React from "react";
import CarForm from "./CarForm";
import { shallow } from "enzyme";

function renderCarForm(args) {
    const defaultProps = {
        sellers: [],
        car: {},
        saving: false,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    }

    const props = { ...defaultProps, ...args };
    return shallow(<CarForm {...props} />);
}

it('renders form and header', () => {
    const wrapper = renderCarForm();
    expect(wrapper.find("form").length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual("Add Car");
})

it('labels save button as "Save" when not saving', () => {
    const wrapper = renderCarForm();
    expect(wrapper.find("button").text()).toEqual("Save");
})

it('labels save button as "Saving..." when saving', () => {
    const wrapper = renderCarForm({ saving: true });
    expect(wrapper.find("button").text()).toEqual("Saving...");
})

