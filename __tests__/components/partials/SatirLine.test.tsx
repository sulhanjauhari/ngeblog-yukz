import React from "react";
import { mount } from "enzyme";
import SatirLine from "../../../src/components/partials/SatirLine";

describe("SatirLine.tsx", () => {
  test("Should render component and match snapshot", () => {
    const wrapper = mount(<SatirLine />);

    expect(wrapper).toMatchSnapshot();
  });
});
