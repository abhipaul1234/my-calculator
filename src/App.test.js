import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("React Calculator", () => {
  test("applies each operation to the running result", () => {
    render(<App />);
    const input = screen.getByLabelText("Number");

    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(screen.getByText("10")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "4" } });
    fireEvent.click(screen.getByRole("button", { name: "Subtract" }));
    expect(screen.getByText("6")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(screen.getByRole("button", { name: "Multiply" }));
    expect(screen.getByText("18")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "2" } });
    fireEvent.click(screen.getByRole("button", { name: "Divide" }));
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  test("handles division by zero without changing the result", () => {
    render(<App />);
    const input = screen.getByLabelText("Number");

    fireEvent.change(input, { target: { value: "8" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(screen.getByRole("button", { name: "Divide" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Cannot divide by zero.");
    expect(screen.getByText("8")).toBeInTheDocument();
  });

  test("resets the input and result independently", () => {
    render(<App />);
    const input = screen.getByLabelText("Number");

    fireEvent.change(input, { target: { value: "12" } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));
    fireEvent.click(screen.getByRole("button", { name: "Reset Input" }));
    expect(input).toHaveValue(null);
    expect(screen.getByText("12")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Reset Result" }));
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("shows a validation message for empty input", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Subtract" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter a number.");
  });
});
