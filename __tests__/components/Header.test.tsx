import { render, cleanup } from "@testing-library/react";
import Header from "../../src/components/Header";

afterEach(cleanup);

describe("Header.tsx", () => {
  test("Shouldn't render SatirLine component", () => {
    const { container } = render(<Header />);

    expect(container.getElementsByClassName("satir-line").length).toBe(0);
  });

  test("Should render SatirLine component", () => {
    const { container } = render(<Header showBottomDivider={true} />);

    expect(container.getElementsByClassName("satir-line").length).toBe(1);
  });
});
