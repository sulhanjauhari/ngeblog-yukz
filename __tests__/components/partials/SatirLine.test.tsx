import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import SatirLine from "../../../src/components/partials/SatirLine";

afterEach(cleanup);

describe("SatirLine.tsx", () => {
  test("Should render component correctly", () => {
    render(<SatirLine />);

    expect(screen.getByTestId("satir-line")).toBeInTheDocument();
  });
});
