import React from "react";
import { render } from "@testing-library/react";
import SatirLine from "../../../src/components/partials/SatirLine";

test("Displays the correct title", () => {
  const tree = render(<SatirLine />);

  // Assertion

  expect(tree).toMatchSnapshot();

  // --> Test will pass
});
