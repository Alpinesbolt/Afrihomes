import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "@/app/Components/ui/Button";

test("renders the component", () => {
  render(<Button content="Hello, Afrihomes!" />);
  expect(screen.getByText("Hello, Afrihomes!")).toBeInTheDocument();
});
