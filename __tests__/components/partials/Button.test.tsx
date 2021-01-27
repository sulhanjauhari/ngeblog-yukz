import React from "react";
import { render, mount } from "enzyme";
import Button from "../../../src/components/partials/Button";

describe("Button.tsx", () => {
  test("Should render component and match snapshot", () => {
    const wrapper = render(<Button />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should set button disable correctly", () => {
    const wrapper = mount(<Button disabled />);

    expect(wrapper.exists(".my-button--disabled")).toBe(true);
  });

  test("Should set button type correctly", () => {
    const type = "submit";
    const wrapper = mount(<Button type={type} />);

    const button = wrapper.find(`.my-button button[type="${type}"]`);
    expect(button.exists()).toBe(true);
  });
});
