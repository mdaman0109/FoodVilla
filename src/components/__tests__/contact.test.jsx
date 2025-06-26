import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Contact from "../Contact"; // 

describe("Contact Component", () => {
  test("renders heading", () => {
    render(<Contact/>);
    const heading = screen.getByText("Hey I am Contact");
    expect(heading).toBeInTheDocument();
  });
});
