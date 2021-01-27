import React from "react";
import { render, mount } from "enzyme";
import Header from "../../src/components/Header";

describe("Header.tsx", () => {
  test("Should render component and match snapshot", () => {
    const props = {
      title: "Test title",
      subtitle: "Test subtitle",
    };
    const wrapper = render(<Header {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should render have SatirLine component", () => {
    const wrapper = mount(<Header showBottomDivider={true} />);

    expect(wrapper.exists(".satir-line")).toBe(true);
  });
});
