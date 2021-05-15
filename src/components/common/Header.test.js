import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("contains 3 NavLink via shallow", () => {
    const numNavLink = shallow(
        <Header />
    ).find("NavLink").length;

    expect(numNavLink).toEqual(3);
})

it("contains 3 anchors via mount", () => {
    const numAnchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find("a").length;

    expect(numAnchors).toEqual(3);
})