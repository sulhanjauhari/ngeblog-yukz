import { render, screen, cleanup } from "@testing-library/react";
import Button from "../../../src/components/partials/Button";

afterEach(cleanup);

describe("Button.tsx", () => {
  test("Should render button text correctly", () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("Should set button disable correctly", () => {
    render(<Button disabled>Test Button</Button>);

    expect(screen.getByText("Test Button")).toBeDisabled();
  });

  test("Should set button type correctly", () => {
    const type = "submit";
    const { container } = render(<Button type={type}>Test Button</Button>);

    expect(container.querySelector("button").getAttribute("type")).toBe(type);
  });
});
